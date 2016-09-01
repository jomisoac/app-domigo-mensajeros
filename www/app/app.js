/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function() {
    "use strict";
    angular
        .module("app", [
            'ionic',
            'angular-jwt',
            '$selectBox',
            'uiGmapgoogle-maps',
            'ngCordova',

            'auth',
            'historial',
            'perfil',
            'servicios'
        ]);
})();