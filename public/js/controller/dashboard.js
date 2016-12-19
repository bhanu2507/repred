/**
 * Created by bhanu.mokkala on 12/15/2016.
 */

angular.module('repred')
    .controller('dbctrl', function($scope, $http) {
/*
        $http.get('http://110.110.110.164:5001/uniquecustomer')
            .success(function (data){
            $scope.customer = data;
        });*/
        $http.get('/getcustlist')
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
                cust_id: $scope.cust_id,
                cust_age: $scope.cust_age,
                cust_gender: $scope.cust_gender,
                cust_region: $scope.cust_region
            });

            $http.post('/predprod?' + data)
                .then(function (data) {
                    console.log(data);
                    $scope.loading = false;
                    $scope.loading1 = true;
                    $scope.preddata = data;
                })
                ,function(error) {
                    console.log(error);
                    /*
                     $scope.ServerResponse =  htmlDecode("Data: " + data +
                     "\n\n\n\nstatus: " + status +
                     "\n\n\n\nheaders: " + header +
                     "\n\n\n\nconfig: " + config);
                     */
                };

            $scope.update = function(id){
                console.log(id.age);
            };

        }

    });