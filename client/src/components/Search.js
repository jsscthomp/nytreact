// include react dependency
import React, { Component } from 'react';

// include api 
const API = require('../utils/API');

// include query and result components
const Query = require('./Search/Query');
const Results = require('./Search/Results');

// create search component
export default class Search extends Component {
    // set initial state of variables
    constructor() {
        super();
        this.state = {
            results: []
        }
    }

    // 
    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.queryTerm !== "" && (prevState.queryTerm !== this.state.queryTerm || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear)) {
    //         API.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)
    //         .then(function(data) {
    //             if (data !== this.state.results) {
    //                 this.setState({
    //                     results: data
    //                 })
    //             }
    //         }.bind(this))
    //     }
    // }
// function that passes down into child components to change parent
    setQuery = (newQuery, newStart, newEnd) => {
        API.runQuery(newQuery, newStart, newEnd)
        .then((data) => {
            this.setState({ results: { docs: data.docs} });
        });
    }

    // render the component. deploy both query and results
    render() {
        return(
            <div className="main-container">

                {/* enables query to perform search */}
                <Query updateSearch={this.setQuery} />
                {/* pass result into the component */}
                <Results results={this.state.results} />

            </div>
        )
    }


};