angular.module('villainy.app', [
  'ngComponentRouter',
  'dashboard.component',
  'navigationMenu.component',
  'villains'
])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])

.run(['$rootRouter', function($rootRouter) {
  $rootRouter.config([
    { path: '/...', component: 'villainyApp' }
  ]);
}])

.component('villainyApp', {
  $routeConfig: [
    { path: '/', component: 'dashboard', name: 'Dashboard' },
    { path: '/villains', component: 'villains', name: 'EditVillains' }
  ],
  template:
    '<img src="assets/images/villain.svg" class="logo" title="by J.J. - http://www.jjmccullough.com/">' +
    '<h1>Villainy<br>App</h1>' +
    '<navigation-menu></navigation-menu>' +
    '<ng-outlet></ng-outlet>'
});