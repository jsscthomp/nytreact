  // include react dependency
import React, { Component } from 'react';
// add react route
import { Link } from 'react-router-dom';      
        
        
        
        
export default class Nav extends Component {  

    render() {
        return(
            <div>   
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
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">NYT React</Link>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                {/* using link in place of <a> and "to" in place of "href" */}
                                <li><Link to="/search">Search</Link></li>
                                <li><Link to="/saved">Saved Articles</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    };
}