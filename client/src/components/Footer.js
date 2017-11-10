// include react dependency
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <footer>
                <hr />
                    <p className="pull-right">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        Built with React.js
                    </p>
                </footer>
            </div>
        )
    }
}