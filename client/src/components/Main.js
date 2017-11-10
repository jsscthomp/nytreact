// include react dependency
import React, { Component } from 'react';
// add react route
import { Link } from 'react-router-dom';

// create main component
export default class Main extends Component {
    render() {
        return(
            // main container div
            <div className="main-container">
                <div className="container">

                    {/* Jumbotron */}
                    <div className="jumbotron">
                        <h1 className="text-center"><strong>New York Times Article Scrubber</strong></h1>
                        <h3 className="text-center">
                            Search for and save articles of interest.
                        </h3>
                    </div>

                    {/* Deploy components search or saved */}
                    {/* pass as this.props.children */}
                    {this.props.children}

                </div>
            </div>
        );
    }
};