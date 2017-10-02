const React = require('react');

export class Query extends React.Component {

    initialState: function() {
        return {
            search: "",
            start: "",
            end: "",
        }
    },

    handleChange: function(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    handleSubmit: function() {
        this.props.updateSearch(this.state.search, this.state.start, this.state.end);
        return false;
    },

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

                                <form>

                                    <div className="form-group">
                                        <h3 className="topic">Topic</h3>
                                        <input type="text" value={this.state.value} className="form-control" id="search" onChange= {this.handleChange} required />

                                        <h3 className="start">Start Year (Required)</h3>
                                        <input value= {this.state.value} className="form-control" id="start" onChange= {this.handleChange} required />

                                        <h3 className="end">End Year (Required)</h3>
                                        <input value={this.state.value} className="form-control" id="end" onChange={this.handleChange} required />
                                    </div>

                                    <div className="pull-right">
                                        <button type="button" className="btn btn-secondary" onClick={this.handleSubmit}>Submit</button>
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