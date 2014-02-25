define(['angular'], function (angular) {
    'use strict';

    /* Controllers */

    return angular.module('portal.controllers', [])
        // Sample controller where service is being used
        .controller('MyCtrl1', ['$scope', function ($scope) {
            $scope.scopedAppVersion = "1.2.3";
        }])
        // More involved example where controller is required from an external file
        .controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            $scope.message = "Hello"
        }]);
});