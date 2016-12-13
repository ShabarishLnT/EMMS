
'use strict';
angular.module('authorizeServiceModule',[]).service('authorizeService',
['sessionService', '$state', '$rootScope', '$urlRouter',
function(sessionService, $state, $rootScope, $urlRouter){
  this.checkAccess = function(event, toState, toParams) {
    if (!sessionService.getCurrentUser() && !(toState.data && toState.data.noAuth)) {
      event.preventDefault();
      sessionService.fetchCurrentUser('/api/profile')
        .success(function(user) {
          sessionService.setCurrentUser(user);
          $state.go(toState.name, toParams);
        })
        .error(function() {
          $state.go('login');
        });
      }
  };
}]);
