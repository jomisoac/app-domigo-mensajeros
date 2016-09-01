/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(config)
        .constant('HOME', 'app.historial');


    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/layout/layout.html'
            });
        // if none of the above states are matched, use this as the fallback
        // $urlRouterProvider.otherwise( function($injector) {
        //     var $state = $injector.get("$state");
        //     $state.go(HOME);
        // });
    }
})();
