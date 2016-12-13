'use strict';

angular.module('authenticationServiceModule',[]).factory('authenticationService',
['$q', 'frontendService',function($q, frontendService){
      function loginAuthentication(response){
      return frontendService.loginAuthenticationRep(response);
      };
      return {
      authenticate:loginAuthentication
      }
}]);
