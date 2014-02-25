define([
    'angular',
    './controllers',
    './routes'
], function (angular, controllers, routes) {
    'use strict';

    console.log("loading module1")

    // Declare app level module which depends on filters, and services

    return angular.module('module1', [
        'ngRoute', 'module1.controllers'
    ]);
});