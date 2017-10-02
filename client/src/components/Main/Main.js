const React = require('react');
const Router = require('react-router');

export class Main extends React.Component {
    render() {
        return(
            <div className="main-container">
                <div className="container">

                    <div className="jumbotron">
                        <h1 className="title">New York Times Article Scrubber</h1>
                    </div>

                    {this.props.children}

                </div>
            </div>
        )
    }
};