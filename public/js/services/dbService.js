angular.module('woodshop').service('dbService', function($http){
  this.getPins = function() {
    return $http({
      method: 'GET',
      url: '/getall'
    }).then(function(res){
      return res
      console.log(res);
    })
  }
})
