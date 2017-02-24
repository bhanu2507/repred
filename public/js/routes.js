/**
 * Created by bhanu.mokkala on 12/15/2016.
 */
'use strict';

angular.module("repred")
    .config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');
        $routeProvider
            .when('/dashboard', {
                templateUrl : 'view/dashboard.html',
                controller : 'dbctrl'
            })
            .when('/moviepred', {
                templateUrl : 'view/moviepred.html',
                controller : 'mvctrl'
            })
            .when('/config', {
                templateUrl : 'view/config.html',
                controller : 'configcontroller'
            })
            .when('/jobs', {
                templateUrl : 'view/joblist.html',
                controller : 'joblistctrl'
            });

    }]);