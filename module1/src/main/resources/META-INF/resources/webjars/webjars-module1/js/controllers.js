define(['angular'], function (angular) {
    'use strict';

    /* Controllers */
    function initControllers(portal) {
        portal.register.controller('module1.MyCtrl1', ['$scope', function ($scope) {
                    $scope.scopedAppVersion = '2.2.2';
                }])
                // More involved example where controller is required from an external file
        portal.register.controller('module1.MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
                    $scope.message = "Hello"
                }]);
    }

    return initControllers
});