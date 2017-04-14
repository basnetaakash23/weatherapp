var app = angular.module('jsbin', []);

app.controller('DemoCtrl', ['weatherFactory',function(weatherFactory) {

  
  var vm = this;

  
  
  
  vm.submit = function(){
    weatherFactory.getData(vm.location)
      .then(function(result){
        vm.data = result;
      })

  };

}]);