// @ts-check
(function(angular) {
  'use strict';
  angular.module('myApp.component').config([
    '$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    },
  ]);
})(angular);
