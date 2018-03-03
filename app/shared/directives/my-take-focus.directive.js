// ts-check
(function(angular) {
  'use strict';
  angular
    .module('shared.module')

    .directive('myTakeFocus', function() {
      return function link(scope, element, attr) {
        scope.$watch(attr.myTakeFocus, function(val) {
          if (val) {
            element[0].focus();
          }
        });
      };
    });
})(angular);
