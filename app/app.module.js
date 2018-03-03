// @ts-check
(function(angular) {
  'use strict';
  angular
    .module('myApp.component', [
      'dashboard.module',
      'navigationMenu.component',
      'ngComponentRouter',
      'villains.module',
    ])
    .run([
      '$rootRouter',
      function($rootRouter) {
        $rootRouter.config([{ path: '/...', component: 'myApp' }]);
      },
    ]);
})(angular);
