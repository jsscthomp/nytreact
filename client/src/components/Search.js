const React = require('react');
const Router = require('react-router');
const API = require('../utils/API');
const Query = require('./Search/Query');
const Results = require('./Search/Results');

export default class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            queryTerm: "",
            startYear: "",
            endYear: "",
            results: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)) {
            API.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)
            .then(function(data) {
                if (data != this.state.results) {
                    this.setState({
                        results: data
                    })
                }
            }.bind(this))
        }
    }

    setQuery(newQuery, newStart, newEnd) {
        this.setState({
            queryTerm: newQuery,
            startYear: newStart,
            endYear: newEnd
        })
    }

    render() {
        return(
            <div className="main-container">

                <Query updateSearch={this.setQuery} />
                <Results results={this.state.results} />

            </div>
        )
    }


};