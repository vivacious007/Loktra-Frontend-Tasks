app.factory('myData',['$http', function($http){
  return $http.get('assets/data.json')
    .success(function(data){
      return data;})
    .error(function(data){
      return data;});
}]);