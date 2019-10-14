(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunch ={
    menu: "",
    message: "Please enter data first"
  }

  function stringNotEmpty(strng) {
    return strng.trim().length > 0;
  }

  function getDishList() {
    var dishes = $scope.lunch.menu.split(",");
    $scope.lunch.dishes = dishes.filter(function(dish){
      return stringNotEmpty(dish)
    });
    ;
  }

  $scope.checkHowMuch = function() {
    if (stringNotEmpty($scope.lunch.menu)){
      $scope.lunch.success = true;
      getDishList();
      if ($scope.lunch.dishes.length > 3) {
        $scope.lunch.message = "Too much!"
      } else {
        $scope.lunch.message = "Enjoy!"
      };
    } else {
      $scope.lunch.success = false;
      $scope.lunch.message = "Please enter data first";
    };
  }
}

})();
