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
                    {/* navbar */}
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button 
                                    type="button" 
                                    className="navbar-toggle" 
                                    data-toggle="collapse" 
                                    data-target=".navbar-ex1-collapse"
                                >
                                    <span className="sr-only">Home</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link className="navbar-brand" to="/">NYT React</Link>
                            </div>

                            <div className="collapse navbar-collapse navbar-ex1-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    {/* using link in place of <a> and "to" in place of "href" */}
                                    <li><Link to="#/search">Search</Link></li>
                                    <li><Link to="#/saved">Saved</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Jumbotron */}
                    <div className="jumbotron">
                        <h1 className="text-center">New York Times Article Scrubber</h1>
                        <h3 className="text-center">
                            <strong>
                                Search for and save articles of interest.
                            </strong>
                        </h3>
                    </div>

                    {/* Deploy components search or saved */}
                    {/* pass as this.props.children */}
                    {this.props.children}

                    <footer>
                        <hr />
                        <p className="pull-right">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            Built with React.js
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
};