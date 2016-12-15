/**
 * Created by bhanu.mokkala on 12/15/2016.
 */
'use strict';

angular.module("repred")
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'view/dashboard.html',
                controller : 'dbctrl'
            })
            .when('/config', {
                templateUrl : 'view/config.html',
                controller : 'configcontroller'
            });
    }]);