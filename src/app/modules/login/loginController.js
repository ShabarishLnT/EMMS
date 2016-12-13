(function() {
  'use strict';

  var module = angular.module('app.login', ['ui.router'])
    .controller('LoginController', loginController)
    .run(runAuth);

  loginController.$inject = ['authenticationService', 'commonModal'];
  function loginController(
    authenticationService, commonModal
    ) {

    var vm = this;
    vm.user = {};
    vm.responseErrorMsg = '';
    this.login = function() {
      authenticationService.authenticate(vm.user)
        .then(null, function(err) {
          vm.responseErrorMsg = err.data.message;
        });

          // commonModal.show("satish","attada"); used to display the modal
    }
  }

  runAuth.$inject = ['$rootScope', '$state', 'authenticationService'];
  function runAuth($rootScope, $state, authenticationService) {
    $rootScope.logout = authenticationService.logout;
    $rootScope.$on('$userLoggedIn', function() {
      $state.go('app.dashboard');
    });
    $rootScope.$on('$userLoggedOut', function() {
      $state.go('login');
    });
  }

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        data: {
          noAuth: true
        },
        templateUrl: 'app/modules/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('app.profile', {
        url: '/profile',
        templateUrl: 'app/modules/profile/edit/edit.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      });
  }

})();
