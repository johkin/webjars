define([], function() {
    'use strict';

    function initRoutes(portal, baseUrl) {
        portal.register.routeProvider.when('/module1/view1', {
                templateUrl: baseUrl + '/partials/partial1.html',
                controller: 'module1.MyCtrl1'
            });
        portal.register.routeProvider.when('/module1/view2', {
                templateUrl: baseUrl + '/partials/partial2.html',
                controller: 'module1.MyCtrl2'
            });
    }
    return initRoutes
});