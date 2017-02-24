/**
 * Created by bhanu.mokkala on 2/24/2017.
 */
angular.module('repred')
    .controller('joblistctrl', function($scope, $http, $timeout) {
        (function tick() {
            $http.get('/jobdetails')
                .then(function (data) {
                        //console.log(data.data);
                        $scope.data = data.data;
                        // console.log('here' + data[0][1].length);
                    },function (error){
                        console.log('error' + error);
                    }
                );
            $timeout(tick, 3000);
        })();
    });