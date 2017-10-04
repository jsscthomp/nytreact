const React = require('react');
const Router = require('react-router');
const API = require('../utils/API');

export class Saved extends React.Component {

    initialState = () => {
        return {
            savedArticles: ""
        }
    }

    componentDidMount = () => {
        API.getSaved()
            .then(function(articleData) {
                this.setState({
                    savedArticles: articleData.data
                });
            }.bind(this))
    }

    handleClick = (item, event) => {
        API.deleteSaved(item.title, item.date, item.url) 
            .then(function(data) {
            
            API.getSaved()
                .then(function(articleData) {
                    this.setState({
                        savedArticles: articleData.data
                    });
                }.bind(this))
            }.bind(this))
    }

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
            }.bind(this))
        }

        return(

            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title"><i className="fa fa-download"></i>Saved Articles</h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {articles}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        )
    }
};
