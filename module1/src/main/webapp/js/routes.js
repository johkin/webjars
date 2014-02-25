define(['angular', 'angularRoute', 'module'], function(angular, angularRoute, module) {
    'use strict';

    return module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/module1/view1', {
            templateUrl: './../partials/partial1.html',
            controller: 'module1.MyCtrl1'
        });
        $routeProvider.when('/module1/view2', {
            templateUrl: './../partials/partial2.html',
            controller: 'module1.MyCtrl2'
        });
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

});