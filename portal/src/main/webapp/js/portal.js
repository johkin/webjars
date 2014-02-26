define([
    'angular',
    'controllers',
    'text!/modulesMap'
], function (angular, controllers, modulesMapString) {
    'use strict';

    var portal = angular.module('portal', [
        'ngRoute', 'portal.controllers'
    ]);

    portal.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        portal.register =
        {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service,
            routeProvider: $routeProvider
        };
    }]);

    var modulesMap = JSON.parse(modulesMapString)

    for (var key in modulesMap) {
        var moduleUrl = "../webjars/" + modulesMap[key]
        require([moduleUrl], function(initMethod) {
            initMethod(portal,  '/webjars/' + key)
            console.log('module ' + key + ' loaded')
        })
    }
    console.log("portal loaded")

    return portal;
});