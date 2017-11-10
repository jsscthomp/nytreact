// include react dependency
import React, { Component } from 'react';

// query component declaration
export default class Query extends Component {
// set initial variables

        state = {
            search: "tennis",
            start: "2010",
            end: "2017",
        }

    // handle changes from textbox
    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    // handle what happens to the search terms. sends to parent search
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateSearch(this.state.search, this.state.start, this.state.end);
    }

    // render the query component
    render() {
        return(
            <div className="main-container">
                
                <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h2 className="panel-title"><i className="fa fa-newspaper-o" aria-hidden="true"></i>Search</h2>
                            </div>

                            <div className="panel-body">

                                {/* associate text-box input with state values */}
                                <form onSubmit={this.handleSubmit}>

                                    <div className="form-group">
                                        <h3 className="topic"><strong>Topic</strong></h3>
                                        <input 
                                            type="text" 
                                            value={this.state.value} 
                                            className="form-control" 
                                            id="search" 
                                            onChange= {this.handleChange} 
                                            required 
                                            />

                                        <h3 className="start"><strong>Start Year (Required)</strong></h3>
                                        <input 
                                            type="number"
                                            value= {this.state.start} 
                                            className="form-control" 
                                            id="start" 
                                            onChange= {this.handleChange} 
                                            required 
                                            />

                                        <h3 className="end"><strong>End Year (Required)</strong></h3>
                                        <input 
                                            type="number"
                                            value={this.state.end} 
                                            className="form-control" 
                                            id="end" 
                                            onChange={this.handleChange} 
                                            required 
                                            />
                                    </div>
                                    {/* create onclick event that triggers handleSubmit method */}
                                    <div className="pull-right">
                                        <button 
                                            type="submit" 
                                            className="btn btn-secondary" 
                                            /* onClick={this.handleSubmit} */
                                            >
                                            <h4>Submit</h4>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};