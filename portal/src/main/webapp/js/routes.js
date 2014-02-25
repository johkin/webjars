define(['angular', 'angularRoute', 'portal'], function(angular, angularRoute, portal) {
    'use strict';

    return portal.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'portal/partials/partial1.html',
            controller: 'MyCtrl1'
        });
        $routeProvider.when('/view2', {
            templateUrl: 'portal/partials/partial2.html',
            controller: 'MyCtrl2'
        });
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

});