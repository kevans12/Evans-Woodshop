angular.module('woodshop').controller('productCtrl', function($scope, $stateParams, mainService){
  $scope.pinInfo = mainService.pinInfo;
  $scope.shavingsetInfo = mainService.shavingsetInfo;
  $scope.cuttingBoards = mainService.cuttingBoards;
  $scope.shavingStands = mainService.shavingStands;
  $scope.penInfo = mainService.penInfo;
  $scope.keychainInfo = mainService.keychainInfo;
  $scope.allProducts = mainService.allProducts;
})
