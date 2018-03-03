(function(angular) {
  angular
    .module('navigationMenu.component', ['ngComponentRouter'])

    .component('navigationMenu', {
      template:
        '<nav>' +
        '<a ng-link="[\'Dashboard\']">Dashboard</a>&nbsp;' +
        '<a ng-link="[\'EditVillains\']">Edit Villains</a>' +
        '</nav>',
    });
})(angular);
