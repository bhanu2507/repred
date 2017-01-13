/**
 * Created by bhanu.mokkala on 1/13/2017.
 */
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://neo4j:atmecs@123@110.110.110.164:7474');
exports.getrelations = function(req, res) {
    db.cypher({
        /*
        query: 'MATCH (u:User {email: {email}}) RETURN u',
        params: {
            email: 'alice@example.com',
        },*/
        query: 'MATCH p=()-[r:ATTACHED]->() RETURN p LIMIT 25'
    }, function (err, results) {
        if (err) throw err;
        var result = results[0];
        if (!result) {
            console.log('No user found.');
        } else {
            var user = result['p'];
            //console.log(JSON.stringify(user, null, 4));
            console.log(results)
            res.send(results);
        }
    });
};