// include axios library for HTTP requests
import axios from "axios";

// api key for new york times
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&apikey=e92e49d7263d4506ac6e8571b2fdc0dc";

// helper function
const API = {
    // this will run query
    runQuery: function(term, start, end) {
        // adjust search terms to proper format
        var formattedTerm = term.trim();
        var formattedStart = start.trim() + "1010";
        var formattedEnd = end.trim() + "1234";

        console.log("Query Run");

        // run query with axios and return to results as an object with an array
        return axios.get(BASEURL, {
            params: {
                'api-key': APIKEY,
                'query': formattedTerm,
                'start_date': formattedStart,
                'end_date': formattedEnd
            }
        })
        .then(function(results) {
            console.log("Axios Results", results.data.response);
            return results.data.response;
        });
    },

    // get saved articles from db
    getSave: function() {
        return axios.get('/api/saved')
            .then(function(results) {
                console.log("axios results", results);
                return results;
        });
    },

    // post saved articles to db
    postSaved: function(title, date, url) {
        var newArticle = {title: title, date: date, url: url};
        console.log('post saved', title);
        return axios.post('/api/saved', newArticle)
            .then(function(response) {
                console.log("axios results", response.data._id);
                return response.data._id;
            });
    },

    // delete article from db
    deleteSaved: function(title, date, url) {
        return axios.delete('/api/saved', {
            params: {
                'title': title,
                'date': date,
                'url': url
            }
        })
        .then(function(results) {
            console.log("axios results", results)
            return results;
        })
    },
};

// export API function
export default API;