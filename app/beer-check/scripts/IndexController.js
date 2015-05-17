angular
  .module('beer-check')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.myBeer = false;
    
    $scope.checkBeer = function(){    	
    	if($scope.myBeer == true){
    		$scope.myBeer = false;
    	} else {
    		$scope.myBeer = true
    	}
    }
  });
