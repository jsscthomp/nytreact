// setting server dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// instance of express
const app = express();
const PORT = process.env.PORT || 6000;

var Article = require('./models/Article.js');

// config body parser for ajax requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// enable CORS so that requests are not blocked
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
// serve up static assets created by create-react-app
app.use(express.static("client/build"));

// ==========================================================================

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

// ===================================================================
// Route to get all saved articles
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
        });
});

// route to add an article to saved list
app.post('/api/saved', function(req, res) {
    var newArticle = new Article(req.body);
    console.log(req.body);
    newArticle.save(function(err, doc) {
        if(err) {
            console.log(err) 
        } else {
            res.send(doc);
        }
    });
});

// route to delet an article from saved list
app.delete('/api/saved/', function(req, res) {
    var url = req.param('url');
    Article.find({ url: url }).remove().exec(function(err, data) {
        if(err) {
            console.log(err);
        } else {
            res.send("Deleted");
        }
    });
});

app.get("*", function(req, res) {
    if ( process.env.NODE_ENV === 'production') {
        res.sendFile(__dirname +  "/client/build/index.html" );
    } else {
        res.sendFile(__dirname + "/client/public/index.html" );
    }
});

// start api server 
app.listen(PORT, function() {
    console.log("API server listening on PORT:" + PORT);
});