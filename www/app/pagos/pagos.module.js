/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';
    angular.module('pagos', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('app.pagos', {
                    url: '/pagos',
                    templateUrl: 'app/pagos/pagos.html',
                    controller: 'PagosCtrl'
                })
        });

})();
