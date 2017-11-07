// setting dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 6000;

var Article = require('./models/Article.js');

// config body parser for ajax requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// serve up static assets
app.use(express.static("client/build"));

// Link to database
var dbLink = 'mongodb://heroku_96qnl2z0:mpmhcg0780b8c540r099uj411l@ds161304.mlab.com:61304/heroku_96qnl2z0';

// set up mongoose promises
mongoose.Promise = global.Promise;
// connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || dbLink,
    {
        useMongoClient: true
    }
);

var db = mongoose.connection;

db.on('error', function (err) {
    console.log("Mongoose Error: ", err);
});

db.once('open', function () {
    console.log("Mongoose connection successful!");
});

app.get('/', function(req, res) {
    res.sendFile(path.join, '/client/public/index.html');
});

app.get('/api/saved', function(req, res) {
    Article.find({})
        .exec(function(err, doc) {
            if(err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
});

app.post('/api/saved', function(req, res) {
    var newArticle = new Article(req.body);

    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    newArticle.save(function(err, doc) {
        if(err) {
            console.log(err) 
        } else {
                res.send(doc._id);
        }
    });
});

app.delete('/api/saved', function(req, res) {
    var url = req.param('url');

    Article.find({'url': url}). remove().exec(function(err, data) {
        if(err) {
            console.log(err);
        } else {
            res.send("Deleted");
        }
    });
});

// start api server 
app.listen(PORT, function() {
    console.log("API server listening on PORT:" + PORT);
});