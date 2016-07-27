app.factory('currentRoute',['$location', function($location){
  return {
    location: function(viewLocation){
      return viewLocation === $location.path();
    }
  };
}]);
