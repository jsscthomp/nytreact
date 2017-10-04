import axios from "axios";
import React from 'react';
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&apikey=e92e49d7263d4506ac6e8571b2fdc0dc";

export class API extends React.Component {
    // set up call to get articles from API
    runQuery = (term, start, end) => {

        var term = term.trim();
        var start = start.trim();
        var end = end.trim();

        return axios.get(BASEURL, {
            params: {
                'api-key': APIKEY,
                'query': term,
                'start_date': start,
                'end_date': end
            }
        }).then(function(results) {
            return results.data.response;
        });
    }

    // get saved articles from db
    getSaved = () => {
        return axios.get('/api/saved')
            .then(function(results) {
                return results;
            })
    }

    // post saved articles to db
    postSaved = (title, date, url) => {
        var newArticle = {title: title, date: date, url: url};
        return axios.post('/api/saved', newArticle)
            .then(function(results) {
                return results._id;
            })
    }

    // delete article from db
    deleteSaved = (title, date, url) => {
        return axios.delete('/api/saved', {
            params: {
                'title': title,
                'date': date,
                'url': url
            }
        }).then(function(results) {
            return results;
        })

    }

};