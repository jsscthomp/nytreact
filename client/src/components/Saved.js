// include react as dependency
import React, { Component } from 'react';
// add API
import API from '../utils/API';

// create and export main component
export default class Saved extends Component {
    // set initial state for this component
    constructor() {
        super();
        this.state =  {
            savedArticles: []
        }
    }
// When this component mounts, get all saved articles from our DB
    componentDidMount() {
        API.getSaved()
            .then((articleData) => {
                this.setState({
                    savedArticles: articleData.data
                });
                // console out to make sure working
                console.log("saved results", articleData.data);
            });
    }

    // this handles the deleting saved articles from db
    handleClick = (item) => {
        // delete the list
        API.deleteSaved(item.title, item.date, item.url) 
            .then((articleData) => {
            
            // get updated list
            API.getSaved()
                .then(() => {
                    this.setState({
                        savedArticles: articleData.data
                    });
                    console.log("saved results", articleData.data);
                });
            });
    }

    // create a method for rendering HTML when there are no saved articles
    renderEmpty = () => {
        return (
            <li className="list-group-item">
                <h3>
                    <span>
                        <em>Save your first article...</em>
                    </span>
                </h3>
            </li>
        );
    }

    // method for mapping through articles and outputting to HTML
    renderArticles = () => {
        return this.state.savedArticles.map((article, index) => {
            return (
                <div key={index}>
                    <li className="list-group-item">
                        <h3>
                            <span>
                                <em>{article.title}</em>
                            </span>
                            <span className="btn-group pull-right">
                                <a href={article.url} rel="noopener noreferrer" target="_blank">
                                    <button className="btn btn-primary">View Article</button>
                                </a>
                                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
                            </span>
                        </h3>
                        <p>Date Published: {article.date}</p>
                    </li>
                </div>
            );
        });
    }

    // method for render a container and all of our articles inside
    renderContainer = () => {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-download" aria-hidden="true"></i>Saved Articles
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.renderArticles()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // render method with helper methods
    render() {
        // this will run if there are no articles
        if (!this.state.savedArticles) {
            return this.renderEmpty();
        } 
        // if we have article, return this
        return this.renderContainer();
    }
};
