angular.module('woodshop').controller('productsDBCtrl', function($scope, $stateParams, dbService){
  $scope.pindata = function(){
    dbService.getPins().then(function(response) {
      $scope.pindata = response.data;
      console.log(response.data);
    })
  };
  $scope.pindata();
})
