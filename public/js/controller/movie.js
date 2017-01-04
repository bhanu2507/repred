/**
 * Created by bhanu.mokkala on 12/15/2016.
 */

angular.module('repred')
    .controller('mvctrl', function($scope, $http) {
/*
        $http.get('http://110.110.110.164:5001/uniquecustomer')
            .success(function (data){
            $scope.customer = data;
        });*/
        $http.get('/getmvcustlist')
            .then(function (data) {
                console.log(data);
               $scope.data = data;
               // console.log('here' + data[0][1].length);
            },function (error){
console.log('error' + error);
                }
            );

        $scope.submit = function () {
            $scope.loading = true;
            $scope.loading1 = false;
            var data = $.param({
                userid: $scope.cust_id
            });

            $http.get('/predictmv?' + data)
                .then(function (data) {
                    //console.log(data.data);
                    $scope.loading = false;
                    $scope.loading1 = true;
                    var dataarray = [];
                 //   for (var i = 0; i < data.data.length; i++) {
                      for (var i = 0; i < 4; i++) {
                       // console.log(encodeURI(data.data[i].MovieName.split("(")[0]));
                        var prms = $.param({
                            mnm: encodeURI(data.data[i].MovieName.split("(")[0]),
                            scr: data.data[i].score
                        });

                        $http.get('/scrape?' + prms)
                            .then(function (results) {
                              //  console.log(results.data[0]);
                              // data.data[i].push('poster':results.data);
                              // poster = results.data;
                               dataarray.push({'MovieName':decodeURI(results.data[0].MovieName),'score':results.data[0].score,'poster':results.data[0].poster});

                            })
                            ,function(error) {
                            console.log(error);
                        };

                    }

                    $scope.preddata = dataarray;
                    //console.log(dataarray);

                })
                ,function(error) {
                    console.log(error);
                };
/*
            $scope.update = function(id){
                console.log(id.age);
            };*/
        }
        $scope.selected= function(cust){
            $scope.selectedCust = cust.userId;
            $scope.cust_id = cust.userId;
            $scope.cust_age = cust.age;
            $scope.cust_gender = cust.gender;
            $scope.cust_region = cust.occupation;
        }
        $scope.getposter = function (prd) {
            console.log(encodeURI(prd.MovieName.split("(")[0]));
/*
            var data = $.param({
                mnm: encodeURI(prd.MovieName.split("(")[0])
            });

            $http.get('/scrape?' + data)
                .then(function (data) {
                    console.log(data.data);

                })
                ,function(error) {
                console.log(error);
            };*/
            return "https://www.google.co.in/images/srpr/logo11w.png"
        }
    });