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

    for (var artifactId in modulesMap) {
        var moduleUrl = "../webjars/" + artifactId + modulesMap[artifactId]
        require([moduleUrl], function (initMethod) {
            initMethod(portal, '/webjars/' + artifactId)
            console.log('module ' + artifactId + ' loaded')
        })
    }
    console.log("portal loaded")

    return portal;
});