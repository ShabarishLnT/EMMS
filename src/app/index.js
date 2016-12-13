(function() {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.login',
        'app.post',
        'app.dashboard',
        'app.data',
        'authenticationServiceModule',
        'authenticationRepositoryModule',
        'sessionServiceModule',
        'shortHistoryModule',
        'authorizeServiceModule',
        'commonServiceModule',
        'notificationServiceModule',
        'app.widget',
        'ui.bootstrap',
        'ui.router'
    ]);
})();
