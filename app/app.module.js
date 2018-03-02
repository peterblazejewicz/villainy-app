(function(angular) {
  'use strict';
  angular
    .module('myApp.component', [
      'ngComponentRouter',
      'dashboard.component',
      'myNavigationMenu.component',
      'villains',
    ])
    .run([
      '$rootRouter',
      function($rootRouter) {
        $rootRouter.config([{ path: '/...', component: 'myApp' }]);
      },
    ]);
})(angular);
