(function(){
	var weatherfactory = function(){

		var submit = function(){
	  
			var URL = 'https://api.apixu.com/v1/current.json';
		    var request = {
		      method: 'GET',
		      url: URL,
		      params: { 
		        q:vm.location,
		        mode:'json',
		        cnt:'7',
		        units:'imperial',
		        key:'1a17370dc8e34f09946231209170404' 
		      }
		    }; 
		  
		    $http(request)
		      .then(function(response) {
		        vm.data = response.data;
		        return vm.data;
		        

		      }).
		      catch(function(response) {
		        vm.data = response.data;
		        return vm.data;
		        
		      });
		};

	};

	angular.module('jsbin').factory('weatherFactory',weatherFactory);	
}());