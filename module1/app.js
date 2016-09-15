(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
  
 LunchCheckController.$inject = ['$scope'];
  
function LunchCheckController($scope) {
  $scope.lunch_items = '';
  $scope.lunch_message = '';
  
  $scope.num_items = function () {
    
    //Message for empty or space only input. Return here as there's no need to execute further code 
    if($scope.lunch_items.trim().length == 0)
      return $scope.lunch_message = "Please enter data first";
    
    var items =  $scope.lunch_items.trim().split(",");
    var num_of_valid_items = items.length;
    
    //Check for valid, non empty items
    for(var i = 0; i < items.length; i++) {
      if(items[i].trim().length == 0)  
        num_of_valid_items -= 1;
    }
    if(num_of_valid_items == 0) 
      //Handle case of empty values separated by commas
      $scope.lunch_message = "Please enter data first"; 
    else if(num_of_valid_items <= 3)
      $scope.lunch_message = "Enjoy!";
    else 
      $scope.lunch_message = "Too much!";

  };
}

})();