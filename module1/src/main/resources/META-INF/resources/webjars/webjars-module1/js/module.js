define([ 'angular',
    './controllers',
    './routes'
], function (angular, controllers, routes) {
    'use strict';

    function init(portal, baseUrl) {
        console.log("loading module1")

        controllers(portal)
        routes(portal, baseUrl)
    }

    return init;
});