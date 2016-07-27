
app.controller('shoppingCartController', function($scope, $localStorage, myData, myCart, cartServices,cartManipulation){

  $scope.cart = myCart.content();

  $scope.addCart = function(item){
    $scope.added = false;
    $scope.duplicate = cartServices.duplicateStatus(item);
    if(!$scope.duplicate){
      cartServices.createNewOrder(item,$scope.cart);
      cartServices.updateLocalStorageCart($scope.cart);
      $scope.added = true;
    };
  };

  function updateLocalStorage(f) {
    f;
    cartServices.updateLocalStorageCart(f);
    $scope.cart = myCart.content();
  };


  $scope.getTotal = function(){
    return cartServices.totalPrice($scope.cart);
  };

  $scope.deleteOrder = function(x){
    updateLocalStorage(cartManipulation.del(x,$scope.cart));
  };

  $scope.incrementQuantity = function(x){
    updateLocalStorage(cartManipulation.incr(x,$scope.cart));
  };

  $scope.decrementQuantity = function(x){
    updateLocalStorage(cartManipulation.decr(x,$scope.cart));
  };

  $scope.emptyCart = function(){
    updateLocalStorage(cartManipulation.empty($scope.cart));
  };
  
});