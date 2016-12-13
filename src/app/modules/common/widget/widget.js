(function() {
  'use strict';

  angular.module('app.widget',[])
    .directive('widget', widget);

  function widget() {
    function link(scope, $element) {
      $element.addClass('widget');
    }
    return {
      link: link,
      restrict: 'EA'
    };
  }

})();
