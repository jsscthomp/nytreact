const React = require('react');
const Router = require('react-router');
const API = require('../utils/API');

export class Main extends React.Component {

    initialState: function() {
        return {
            savedArticles: ""
        }
    },

    componentDidMount: function() {
        API.getSaved()
            .then(function(articleData) {
                this.setState({
                    savedArticles: articleData.data
                });
            }.bind(this))
    },

    handleClick: function(item, event) {
        API.deleteSaved(item.title, item.date, item.url) 
            .then(function(data) {
            
            API.getSaved()
                .then(function(articleData) {
                    this.setState({
                        savedArticles: articleData.data
                    });
                }.bind(this))
            }.bind(this))
    },

    render() {
        if (!this.state.savedArticles === "") {
            return(
                <li className="list-group-item">
                    <h3>
                        <span><em>Whoops! You don't have any saved articles yet!</em></span>
                    </h3>
                </li>
            )
        } else {

            var articles = this.state.savedArticles.map(function(article, index) {
                return(
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>
                                <span><em>{article.title}</em></span>
                                <span className="btn-group pull-right">
                                    <button className="btn btn-default"><a href={article.url} target="_blank">View Article</a></button>
                                    <button className="btn btn-danger" onClick={this.handleClick.bind(this.article)}></button>
                                </span>
                            </h3>
                            <p>Date Published: {article.date}</p>
                        </li>
                    </div>
                )
            })
        }
    }
}