app.controller('navbarController', function($scope, currentRoute,$localStorage,myCart){
  $scope.isActive = function (x) { 
    return currentRoute.location(x);
  };
  $scope.itemsInCart = function(){
    return (myCart.itemsNumber());
  };
});