"use strict";

angular
    .module('BCSG', [
        'ui.bootstrap',
        "ngRoute",
        "BCSG.Controllers",
        "BCSG.Services"
    ])
    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

angular.module("BCSG.Controllers", []);
angular.module("BCSG.Factories", []);
angular.module("BCSG.Services", []);