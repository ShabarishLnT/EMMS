
'use strict';
angular.module('sessionServiceModule',[])
.service('sessionService',['$http', '$q', '$rootScope',function($http, $q, $rootScope){

    var session = this;
this.fetchCurrentUser = function(url) {
  var userFetch;
  if (session.getCurrentUser()) {
    userFetch = $q(function(resolve) {
      resolve(session.getCurrentUser());
    });
  } else {
    userFetch = $http.get(url);
  }
  return userFetch;
  };

  this.getCurrentUser = function() {
  return this.user;
  };

  this.setCurrentUser = function(user) {
  this.user = user;
  $rootScope.$broadcast('$userSet', this.user);
  };

}]);
