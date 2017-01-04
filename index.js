/**
 * Created by bhanu.mokkala on 12/14/2016.
 */
/**
 * Created by bhanu.mokkala on 11/28/2016.
 */
/**
 * Created by bhanu.mokkala on 11/4/2016.
 */
var express   = require("express");
//var mysql     = require('mysql');
var path      = require('path');

var app = express();
/*
 var server = require('http').Server(app);
 var io = require('socket.io')(server);
 */
//server.listen(80);

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();
clist = require('./server/getcustlist');
pprod = require('./server/predictprodid');
mvpred = require('./server/moviepred');
simdb = require('./server/scrape');

app.get('/getcustlist', clist.getcustlist);
app.post('/predprod', pprod.predicted);
app.get('/getmvcustlist', mvpred.getmvcustlist);
app.get('/predictmv', mvpred.predictmv);
app.get('/scrape', simdb.getposter);

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/bower_components', express.static(__dirname + '/bower_components/'));

app.get("/",function(req,res){

    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Set port
port = process.env.PORT || 5000;

// Use public directory for static files
app.use(express.static(__dirname + '/public'));


// Include the routes module
//require('./app/routes')(app);

// Your code here
app.listen(port);



