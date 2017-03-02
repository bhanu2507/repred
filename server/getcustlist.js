/**
 * Created by bhanu.mokkala on 12/16/2016.
 */
var http = require('http');
var https = require('https');
var querystring = require('querystring');
var fs = require('fs');

exports.getcustlist = function(req, res) {

    var options = {
        host: '110.110.110.164',
        port: 5001,
        path: '/uniquecustomer'
    };

    http.get(options, function(res1) {
        //console.log("Got response: " + res.statusCode);
        var results = "";
        res1.on("data", function(chunk) {
            //console.log("BODY: " + chunk);
            results += chunk;
        });
        res1.on('end', function(){
            //console.log(results);
            res.send(results);
        });
    }).on('error', function(e) {
        //console.log("Got error: " + e.message);
    });

};
