angular.module('dashboard.component', ['favouriteVillains.component'])

.component('dashboard', {
  template:
    '<div>' +
      '<p>Welcome to the villains app</p>' +
      '<favourite-villains></favourite-villains>' +
    '</div>'
});
