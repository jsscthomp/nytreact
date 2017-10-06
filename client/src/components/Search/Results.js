const React = require('react');
const Router = require('react-router');
const API = require('../../utils/API');

export class Results extends React.Component {

    initialState =  () => {
        return {
            title: "",
            url: "",
            date: "",
        }
    }

    handleClick = (item, event) => {
        API.postSaved(item.headline.main, item.pub_date, item.web_url).then(function(data){}.bind(this))
    }

    render() {
        if (!this.props.results.hasOwnProperty('docs')) {
            return(
                <li className="list-group-item">
                    <h4>
                        <span><em>Search for articles to  begin</em></span>
                    </h4>
                </li>
            )
        } else {
            var articles = this.props.results.docs.map(function(article, index) {
                return(
                    <div key={index}>
                        <li className="list-group-item">
                            <h4>
                                <span><em>{article.headline.main}</em></span>
                                <span className="btn-group pull-right">
                                    <button className="btn btn-default"><a href={article.web_url} target="_blank">View Article</a></button>
                                </span>
                                <p>Date Published: {article.pub_date}</p>
                            </h4>
                        </li>
                    </div>
                )
            }.bind(this))
        }

        return(
            <div className="main-container">

                <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <i className="fa fa-list-alt">
                                        Results
                                    </i>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {articles}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
};