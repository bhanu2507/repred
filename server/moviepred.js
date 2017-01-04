/**
 * Created by bhanu.mokkala on 12/16/2016.
 */
var http = require('http');
var https = require('https');
var querystring = require('querystring');
var fs = require('fs');
var request = require("request");

exports.getmvcustlist = function(req, res) {

    var options = {
        host: '110.110.110.164',
        port: 5001,
        path: '/uniqueuser'
    };

    http.get(options, function(res1) {
        console.log("Got response: " + res.statusCode);
        var results = "";
        res1.on("data", function(chunk) {
            //console.log("BODY: " + chunk);
            results += chunk;
        });
        res1.on('end', function(){
            console.log(results.data);
            res.send(results);
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

};



exports.predictmv = function(req, res) {

    var options = { method: 'GET',
        url: 'http://110.110.110.164:5001/mr',
        qs: { userid: req.query.userid },
        headers:
            { 'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        //console.log(body);
        res.send(body);
    });
};
