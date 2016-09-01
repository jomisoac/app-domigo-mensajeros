/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config($ionicConfigProvider, uiGmapGoogleMapApiProvider) {

        $ionicConfigProvider.navBar.alignTitle('center');

        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            libraries: 'places,geometry,visualization',
            language: 'es'
        });
    }
})();