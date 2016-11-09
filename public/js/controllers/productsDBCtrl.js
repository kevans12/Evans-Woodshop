angular.module('woodshop').controller('productsDBCtrl', function($scope, $stateParams, dbService){
  $scope.test = "testing";
  $scope.pindata = function(){
    console.log('frontend controller');
    dbService.getPins().then(function(response) {
      $scope.pindata = response.data;
      console.log(response.data)
    })
  };
  $scope.pindata();
})
