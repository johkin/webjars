define([
    'angular',
    'controllers',
    'text!/modulesMap'
], function (angular, controllers, modulesMapString) {
    'use strict';

    var modulesMap = JSON.parse(modulesMapString)

    var moduleArr = []

    for (var key in modulesMap) {
        var moduleUrl = "../webjars/" + modulesMap[key]
        moduleArr.push(moduleUrl)
    }

    require(moduleArr, function () {
        console.log("loaded")
    });

    return angular.module('portal', [
        'ngRoute', 'portal.controllers'
    ]);
});