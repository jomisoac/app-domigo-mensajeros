/**
 * Created by Jose Soto Acosta on 30/08/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun);

    /* @ngInject */
    function appRun($ionicPlatform, $state, authService, $ionicLoading, HOME) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            autenticate();
        });


        function autenticate() {
            if (!authService.currentUser()) {
                authService.autologin().then(function (res) {
                    hideSplash();
                    if (res) {

                    } else {
                        $state.go('login');
                    }
                })
            }
        }

        function hideSplash() {
            if (navigator.splashscreen) {
                setTimeout(function () {
                    navigator.splashscreen.hide();
                }, 100);
            }
        }
    }
})();
