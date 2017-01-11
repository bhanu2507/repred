/**
 * Created by bhanu.mokkala on 12/15/2016.
 */

angular.module('repred')
    .controller('dbctrl', function($scope, $http) {
        $scope.itemempty = true;
        $http.get('/getcustlist')
            .then(function (data) {
                //console.log(data);
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
                    //console.log(data);
                    $scope.loading = false;
                    $scope.loading1 = true;
                    $scope.preddata = data;
                }),function(error) {
                    console.log(error);

                };
/*
            $scope.update = function(id){
                console.log(id.age);
            };*/
        };
        $scope.selected= function(cust){
            $scope.itemempty = false;
            $scope.selectedCust = cust.CustomerId;
            $scope.cust_id = cust.CustomerId;
            $scope.cust_age = cust.Age.substring(0,2);
            $scope.cust_gender = cust.Gender;
            $scope.cust_region = cust.Area;
        }
    });