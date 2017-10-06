const React = require('react');
const Router = require('react-router');

export default class Main extends React.Component {
    render() {
        return(
            <div className="main-container">
                <div className="container">

                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                    <span className="sr-only">Home</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">NYT React</a>
                            </div>

                            <div className="collapse navbar-collapse navbar-ex1-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#/search">Search</a></li>
                                    <li><a href="#/saved">Saved</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="jumbotron">
                        <h1 className="title">New York Times Article Scrubber</h1>
                    </div>

                    {this.props.children}

                </div>
            </div>
        )
    }
};