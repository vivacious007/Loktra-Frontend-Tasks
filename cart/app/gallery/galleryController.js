app.controller('galleryController', function($scope, myData, currentRoute, $routeParams){
  myData.success(function(data){
    $scope.myData = data;
    $scope.typo = $routeParams.type;
    
    $scope.isActive = function (x) { 
      return currentRoute.location(x);
    };
  });
});