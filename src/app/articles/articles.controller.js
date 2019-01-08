function ArticlesController(someService) {
  'ngInject';
  var vm = this;

  vm.count = someService.getCount() || 0;
  vm.numberA = 0;
  vm.numberB = 0;
  vm.total = 0;

  vm.addNumbers = function() {
    import('../en.json').then(data => {
      vm.data = data;
    });
    vm.total = someService.add(vm.numberA, vm.numberB)
  }

  vm.addCount = function() {
    someService.addCount()
    vm.count = someService.getCount()
  }

  vm.subtractCount = function() {
    someService.subtractCount()
    vm.count = someService.getCount()
  }

}

export { ArticlesController };
