

angular.module('IotApp',['ngResource']);


angular.module('IotApp').factory('IotService', function($resource){
  return $resource('/:button/:state', null, {
    update: {
      method: "PUT"
    }
  });
});

angular.module('IotApp').controller('IotCntrl',function($scope,IotService){
	$scope.test = "hello";
	$scope.status = {};

    var getStatus = function(){
    	IotService.get({button:'status'},function(obj){
    	$scope.status = obj;
    });
    }
    
    getStatus();
    var updateStatus = function(buttonName,state){
    	IotService.update({button:buttonName,state:state},null);
    }

    var reverseState = function(state){
    	if(state === "1")
    		return "0";
    	return "1";
    }
    
   

    $scope.click = function(which,state){
         updateStatus(which,reverseState(state));
          getStatus();
    }

   

    

});

