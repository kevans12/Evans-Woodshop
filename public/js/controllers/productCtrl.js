angular.module('woodshop').controller('productCtrl', function($scope, $stateParams, mainService){
  $scope.pinInfo = mainService.pinInfo;
  $scope.shavingsetInfo = mainService.shavingsetInfo;
})
