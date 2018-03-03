// @ts-check
(function(angular) {
  'use strict';
  angular
    .module('myApp.component', [
      'ngComponentRouter',
      'dashboard.component',
      'navigationMenu.component',
      'villains',
    ])
    .run([
      '$rootRouter',
      function($rootRouter) {
        $rootRouter.config([{ path: '/...', component: 'myApp' }]);
      },
    ]);
})(angular);
