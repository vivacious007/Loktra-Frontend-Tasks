app.controller('productController', function($scope, myData, $routeParams){
  myData.success(function(data){
    angular.forEach(data, function(value, key) {
      if(key+1 == $routeParams.id){
        $scope.product = value;
        $scope.itemType = value.type;
      };
    });
    $scope.typo = $routeParams.type;
  });
});

