/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';
    angular.module('perfil', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('app.perfil', {
                    url: '/perfil',
                    templateUrl: 'app/perfil/perfil.html',
                    controller: 'PerfilCtrl'
                })
        });

})();
