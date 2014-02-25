require.config({
    paths: {
        angular: '../webjars/angularjs/1.2.13/angular',
        angularRoute: '../webjars/angularjs/1.2.13/angular-route',
        text: '../webjars/requirejs-text/2.0.10/text'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular']
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'portal',
    'routes'
], function(angular, portal, routes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([portal['name']]);
    });
});