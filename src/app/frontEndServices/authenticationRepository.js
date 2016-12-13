
'use strict';
    angular.module('authenticationRepositoryModule',[]).service('frontendService',['$http','sessionService','$rootScope',
    function($http, sessionService, $rootScope){
    this.loginAuthenticationRep = function(user) {
    //  console.log(user);

      return $http.post('/api/login', user)
        .success(function(data) {

          sessionService.setCurrentUser(data);
       //   console.log(data);
          $rootScope.$broadcast('$userLoggedIn');
        });
    };
  }]);
