'use strict';

angular.module('shortHistoryModule',[]).service('shortHistory',['$state',function($state){
  var history = this;

  function setItem(what, state, params) {
    history[what] = {
      state: state,
      params: params
    };
  }

  this.init = function(scope) {
    scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      setItem('from', fromState, fromParams);
      setItem('to', toState, toParams);
    });
  };

  this.goTo = function(where) {
    $state.go(history[where].state.name, history[where].params)
  };
}]);
