/**
 * Created by bhanu.mokkala on 12/15/2016.
 */
'use strict';

angular.module("repred")
    .config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/dashboard', {
                templateUrl : 'view/dashboard.html',
                controller : 'dbctrl'
            })
            .when('/config', {
                templateUrl : 'view/config.html',
                controller : 'configcontroller'
            });
    }]);