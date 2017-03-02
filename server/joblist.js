/**
 * Created by bhanu.mokkala on 2/24/2017.
 */

var http = require('http');
var https = require('https');
var querystring = require('querystring');
var fs = require('fs');

exports.getjoblist = function(req, res) {

    var options = {
        host: '110.110.110.164',
        port: 5000,
        path: '/getjobdetails'
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
       // console.log("Got error: " + e.message);
    });

};