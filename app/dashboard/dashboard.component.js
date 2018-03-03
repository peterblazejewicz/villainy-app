// ts-check
(function(angular) {
  'use strict';
  angular
    .module('dashboard.module')

    .component('dashboard', {
      template: [
        '<div>',
        ' <p>Welcome to the villains app</p>',
        ' <favourite-villains></favourite-villains>',
        '</div>',
      ].join(''),
    });
})(angular);
