/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuCtrl', MenuCtrl);

    /* @ngInject */
    function MenuCtrl(authService) {
        var vm = this;
        vm.usuario = authService.currentUser();
        vm.menuList = [
            {
                nombre: 'Historial',
                statego: 'app.lista_empresas',
                icon: 'ion-ios-list'
            },
            {
                nombre: 'Servicios',
                statego: 'app.servicios',
                icon: 'ion-ios-location'
            },
        ];

        vm.logout = authService.logout;
    }
})();
