angular.module('woodshop').controller('specProdCtrlfromServ', function($scope, $stateParams, mainService, $q){

  $scope.pinInfo = mainService.pinInfo;
  $scope.shavingsetInfo = mainService.shavingsetInfo;
  $scope.allProducts = mainService.allProducts;
      // console.log($scope.pinInfo);
      $scope.selectedProd = '';
      if($stateParams.prodID) {
      //  console.log("selected");
       for(var i = 0; i < $scope.allProducts.length; i++) {
          // console.log($scope.pindata[i].id)
         if($stateParams.prodID == $scope.allProducts[i].id) {
          $scope.selectedProd = $scope.allProducts[i];
        }
       }
      //  console.log('doc.get', document.getElementById('test'))


      //  var name = document.getElementById('name');
      //  var price = document.getElementById('price');
       var button = document.getElementById('button');
       var description = document.getElementById('Description');
       //
      //  name.innerHTML = $scope.selectedProd.name;
      //  price.innerHTML = $scope.selectedProd.price;
       button.innerHTML = $scope.selectedProd.button;
       description.innerHTML = $scope.selectedProd.desc;
     }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();



  // dbService.getpin($stateParams.id)
  //  .then(function(response) {
  //    $scope.pin = response;
  //  })




})
