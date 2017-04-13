var app = angular.module('jsbin', []);

app.controller('DemoCtrl', ['weatherfactory',function(weatherfactory) {

  
  var vm = this;

  
  
  
  vm.submit = function(){
  
    vm.data = weatherfactory.getData();
  }

}]);