app.factory('myCart',['$localStorage', function($localStorage){
  return {
    content: function(){
      if($localStorage.cart){
        return $localStorage.cart;
      }else{
        return [];
      }
    },
    itemsNumber: function(){
      if($localStorage.cart){
        return $localStorage.cart.length;
      }else{
        return false;
      }
    }
  };
}]);
