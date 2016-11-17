angular.module('woodshop').controller('specificProdCtrl', function($scope, $stateParams, dbService, $q){
    dbService.getPins()
    .then(function(response) {
      $scope.pindata = response.data;
      // console.log($scope.pindata);
      $scope.selectedItem = '';
      if($stateParams.id) {
      //  console.log("selected");
       for(var i = 0; i < $scope.pindata.length; i++) {
          // console.log($scope.pindata[i].id)
         if($stateParams.id == $scope.pindata[i].product_id) {
          $scope.selectedItem = $scope.pindata[i];
         }
       }
       console.log('doc.get', document.getElementById('test'))


       var name = document.getElementById('name');
       var price = document.getElementById('price');
       var button = document.getElementById('button');

       name.innerHTML = $scope.selectedItem.name;
       price.innerHTML = $scope.selectedItem.price;
       button.innerHTML = $scope.selectedItem.button;

     }
    })




  // dbService.getpin($stateParams.id)
  //  .then(function(response) {
  //    $scope.pin = response;
  //  })




})
