import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&apikey=e92e49d7263d4506ac6e8571b2fdc0dc";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};