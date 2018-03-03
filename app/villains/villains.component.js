// ts-check
(function(angular) {
  angular
    .module('villains.component', [
      'villains.service',
      'favouriteVillains.component',
    ])

    .component('villains', {
      template: [
        '<div class="my-villains">',
        ' <div class="edit-list">',
        '   <h2>Edit Villains</h2>',
        '   <div ng-repeat="villain in $ctrl.villains track by villain.id">',
        '     <villain ',
        '       villain="villain" ',
        '         is-favourite="$ctrl.isFavourite(villain)" ',
        '         on-villain-change="$ctrl.saveVillain(villain, $event.firstName, $event.lastName)"',
        '         on-is-favourite-change="$ctrl.toggleFavourite(villain)">',
        '     </villain>',
        '   </div>',
        '   <p>Click on a villains name to change it.<br>Changes are saved when you press enter or leave the edit box.<br>Cancel changes by pressing escape.</p>',
        ' </div>',
        ' <favourite-villains></favourite-villains>',
        '</div>',
      ].join(''),
      controller: Villains,
    });

  function Villains(villainsService) {
    this.villainsService = villainsService;
  }
  Villains.$inject = ['villainsService'];

  Villains.prototype = {
    $onInit: function() {
      this.loadVillains();
    },
    loadVillains: function() {
      var _this = this;
      this.villainsService.getVillains().then(function(villains) {
        _this.villains = villains;
      });
    },
    saveVillain: function(villain, firstName, lastName) {
      this.villainsService.save(villain.id, firstName, lastName);
    },
    toggleFavourite: function(villain) {
      this.villainsService.toggleFavourite(villain);
    },
    isFavourite: function(villain) {
      return this.villainsService.isFavourite(villain);
    },
  };
})(angular);
