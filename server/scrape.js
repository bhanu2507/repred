var http = require("http");

exports.getposter = function(req1, res1) {
    var options = {
        "method": "GET",
        "hostname": "api.themoviedb.org",
        "port": null,
       // "path": "/3/search/movie?include_adult=false&page=1&query=Angel%20Baby&language=en-US&api_key=02f96f2378c88a80fb74b6c145635c91",
        "path": "/3/search/movie?include_adult=false&page=1&query="+req1.query.mnm+"&language=en-US&api_key=02f96f2378c88a80fb74b6c145635c91",
        "headers": {}
    };

    var req = http.request(options, function (res) {
        var chunks = [];
        var results = "";
        res.on("data", function (chunk) {
            chunks.push(chunk);
            results += chunk;
        });

        res.on("end", function () {
            /*
            var body = Buffer.concat(chunks);
            console.log(body.toString());*/
            var jsonObj = JSON.parse(results);
           // console.log(results);
           // console.log(jsonObj.results[0].poster_path);
            var poster = "";
            if (typeof jsonObj.results[0] != 'undefined'){
                poster = jsonObj.results[0].poster_path;
            } else {
                poster = "";
            }
            var finalarray = [];
            finalarray.push({'MovieName':req1.query.mnm,'score':req1.query.scr,'poster':poster});
            //res1.send(jsonObj.results[0].poster_path);
            //console.log(finalarray);
            res1.send(finalarray);

        });
    });
   // req.write("{}");
    req.end();
};
