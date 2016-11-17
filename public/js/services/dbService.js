angular.module('woodshop').service('dbService', function($http, $q, $stateParams, $sce){
  var pins;
  var defer;
  var getData = function() {
    defer = $q.defer();
    $http({
      method: 'GET',
      url: '/getall'
    }).then(function(res){
      defer.resolve(res);
      pins = res;
    })
    return defer.promise;
  }

  this.getPins = function(){
    if (pins) {
      return $q.resolve(pins);
    } else if(defer){
      return defer.promise;
    } else{
      return getData();
    }
    // console.log(pins);
  }

  // this.getPin = function(id){
  //   this.selectedItem = '';
  //
  //   if(id) {
  //   console.log("selected");
  //   for(var i = 0; i < this.pins.length; i++) {
  //
  //     if(id == this.pins[i].id) {
  //       this.selectedItem = this.pins[i];
  //     }
  //   }
  //   console.log(this.selectedItem)
  //  }
  // }
  // return this.selectedItem;

})
