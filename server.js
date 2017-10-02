// setting dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// config body parser for ajax requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve up static assets
app.use(express.static("client/build"));
// add routes
app.use(routes);

// set up mongoose promises
mongoose.Promise = global.Promise;
// connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
    {
        useMongoClient: true
    }
);

// start api server 
app.listen(PORT, function() {
    console.log("API server listening on PORT:" ${PORT});
});