/**
 * Created by bhanu.mokkala on 12/16/2016.
 */

var request = require("request");

exports.predicted = function(req, res) {


    var options = { method: 'POST',
        url: 'http://110.110.110.164:5001/predproduct',
        headers:
            {   'cache-control': 'no-cache',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
        formData:
            { customerId: req.query.cust_id,
                gender: req.query.cust_gender,
                age: req.query.cust_age,
                area: req.query.cust_region,
                productId: '',
                product_group: '',
                quantity: '',
                asset: '',
                price: '',
                transaction_datetime: '' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        //console.log(body);
        res.send(body);
    });



    /*
     function getPred(data) {
     // console.log('===getPred()===');
     var dataString = JSON.stringify(data)

     var host = '110.110.110.164'

     var path = '/predproduct'

     var method = 'POST'

     var headers = {'Content-Type': 'application/json'};

     var options = {

     host: host,

     port: 5001,

     path: path,

     method: 'POST',

     headers: headers

     };


     var reqPost = http.request(options, function (res1) {

     console.log('===reqPost()===');

     console.log('StatusCode: ', res1.statusCode);

     console.log('headers: ', res1.headers);

     var results = "";
     res1.on('data', function (d) {

     process.stdout.write(d);
     results += d;
     });

     res1.on('end', function () {
     console.log(results);
     res.send(results);
     });
     });

     // Would need more parsing out of prediction from the result

     reqPost.write(dataString);

     reqPost.end();

     reqPost.on('error', function (e) {

     console.error(e);

     });

     }



     //Could build feature inputs from web form or RDMS. This is the new data that needs to be passed to the web service.

     function buildFeatureInput(){

     console.log('===performRequest()===');
     var data = { formData:
     { customerId: '',
     gender: '',
     age: '24',
     area: '',
     productId: '',
     product_group: '',
     quantity: '',
     asset: '',
     price: '',
     transaction_datetime: '' }}


     getPred(data);

     }
     buildFeatureInput();
     */
};
