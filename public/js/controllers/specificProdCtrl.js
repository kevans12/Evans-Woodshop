angular.module('woodshop').controller('specificProdCtrl', function($scope, $stateParams, dbService, $q){
    dbService.getPins()
    .then(function(response) {
      $scope.pindata = response.data;
      console.log($scope.pindata);
    })

  $scope.selectedItem = '';

 //  if($stateParams.id) {
 //  console.log("selected");
 //  for(var i = 0; i < $scope.pindata.length; i++) {
 //
 //    if($stateParams.id == $scope.pindata[i].id) {
 //      $scope.selectedItem = $scope.pindata[i];
 //    }
 //  }
 //  console.log($scope.selectedItem)
 // }
})
