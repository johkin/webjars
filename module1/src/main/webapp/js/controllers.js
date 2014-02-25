define(['angular'], function (angular) {
    'use strict';

    /* Controllers */

    return angular.module('module1.controllers', [])
        // Sample controller where service is being used
        .controller('module1.MyCtrl1', ['$scope', function ($scope) {
            $scope.scopedAppVersion = '2.2.2';
        }])
        // More involved example where controller is required from an external file
        .controller('module1.MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            $scope.message = "Hello"
        }]);
});