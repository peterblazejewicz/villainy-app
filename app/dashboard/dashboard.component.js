(function(angular) {
  'use strict';
  angular
    .module('dashboard.component', ['myFavouriteVillains.component'])

    .component('dashboard', {
      template: [
        '<div>',
        ' <p>Welcome to the villains app</p>',
        ' <my-favourite-villains></my-favourite-villains>',
        '</div>',
      ].join(''),
    });
})(angular);
