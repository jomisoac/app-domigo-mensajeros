/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';
    angular.module('auth', [])

        .config(function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/auth/login.html',
                    controller: 'LoginCtrl as vm',
                    data: {
                        noRequiresLogin: true
                    }
                })
                .state('register', {
                    url: '/regitrarse',
                    templateUrl: 'app/auth/registrarse.html',
                    controller: 'RegisterCtrl as vm',
                    data: {
                        noRequiresLogin: true
                    }
                })
        });
})();
