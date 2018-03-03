// ts-check
(function(angular) {
  'use strict';
  angular
    .module('dashboard.component', ['favouriteVillains.component'])

    .component('dashboard', {
      template: [
        '<div>',
        ' <p>Welcome to the villains app</p>',
        ' <favourite-villains></favourite-villains>',
        '</div>',
      ].join(''),
    });
})(angular);
