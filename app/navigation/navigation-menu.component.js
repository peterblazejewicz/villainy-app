// ts-check
(function(angular) {
  'use strict';
  angular.module('navigation.module').component('navigationMenu', {
    template:
      '<nav>' +
      '<a ng-link="[\'Dashboard\']">Dashboard</a>&nbsp;' +
      '<a ng-link="[\'EditVillains\']">Edit Villains</a>' +
      '</nav>',
  });
})(angular);
