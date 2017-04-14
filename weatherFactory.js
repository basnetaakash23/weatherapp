(function(){
	var weatherFactory = function($http){

		var getData = function(location){
	  
			var URL = 'https://api.apixu.com/v1/current.json';
		    var request = {
		      method: 'GET',
		      url: URL,
		      params: { 
		        q:location,
		        mode:'json',
		        cnt:'7',
		        units:'imperial',
		        key:'1a17370dc8e34f09946231209170404' 
		      }
		    }; 
		  
		    return $http(request)
		      .then(function(response) {
		        data = response.data;
		        return data;
		        
		      }).
		      catch(function(response) {
		        data = response.data;
		        return data;
		        
		      });
		};

		return {
			getData: getData
			
		};

	};

	angular.module('jsbin').factory('weatherFactory',weatherFactory);	
}());