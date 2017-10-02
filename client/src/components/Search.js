const React = require('react');
const Router = require('react-router');
const API = require('../utils/API');

export class Search extends React.Component {

    initialState: function() {
        return {
            queryTerm: "",
            startYear: "",
            endYear: "",
            results: {}
        }
    },

    
}