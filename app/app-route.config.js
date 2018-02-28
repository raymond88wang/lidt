(function () {
    'use strict';
    angular.module('lidt')
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function config(
        $stateProvider,
        $urlRouterProvider)
    {
        $urlRouterProvider
            .otherwise('/Dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/Dashboard',
                template: '<card-container />',
                params: {

                }
            })
            .state('linegraph', {
                url: '/Graph/LineGraph',
                template: '<graphs-container />',
                params: {

                }
            })
    }
})();