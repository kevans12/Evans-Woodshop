angular.module('woodshop').service('dbService', function($http, $q){
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
  }

  this.getPin = function(id){

  }

})
