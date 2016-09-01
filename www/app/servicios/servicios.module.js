/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';
    angular.module('servicios', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('app.servicios', {
                    url: '/servicios',
                    templateUrl: 'app/servicios/servicios.html',
                    controller: 'ServiciosCtrl'
                })
        });

})();
