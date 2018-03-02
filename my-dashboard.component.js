angular.module('myDashboard.component', ['favouriteVillains.component'])

.component('myDashboard', {
  template:
    '<div>' +
      '<p>Welcome to the villains app</p>' +
      '<my-favourite-villains></my-favourite-villains>' +
    '</div>'
});
