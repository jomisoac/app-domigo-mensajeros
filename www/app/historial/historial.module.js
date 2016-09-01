/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';
    angular.module('historial', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('app.historial', {
                    url: '/historial',
                    templateUrl: 'app/historial/historial.html',
                    controller: 'HistorialCtrl'
                })
        });

})();
