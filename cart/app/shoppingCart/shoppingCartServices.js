app.service('cartServices',function(myCart, $localStorage){
  
  this.updateLocalStorageCart = function(x){
    $localStorage.cart = x;
  };
  
  this.duplicateStatus = function(x){
    var doubled = false;
    var allOrders = myCart.content();
    angular.forEach(allOrders, function(value,key){
      if(x.id == value.productId){
        doubled = true;
      }
    });
    return doubled;
  };

  this.createNewOrder = function(x,thecart){
    var order = {
      productId: x.id,
      productImage: x.image,
      productType: x.type,
      productName: x.title,
      productPrice: x.price,
      productQuantity: 1
    };
    thecart.push(order);
  };

  this.totalPrice = function(thecart){
    var total = 0;
    var len = thecart.length;
    for (var i = 0; i < len; i++) {
      total += thecart[i].productPrice * thecart[i].productQuantity;
    };
    return total;
  };
});

app.service('cartManipulation',function(){
  this.del = function(x, thecart) {
    thecart.splice(x,1);
    return thecart;
  };

  this.incr = function(x,thecart) {
    thecart[x].productQuantity++;
    return thecart;
  };

  this.decr = function(x,thecart) {
    if (thecart[x].productQuantity > 1) {
      thecart[x].productQuantity--;
    }
    return thecart;
  };

  this.empty = function(thecart) {
    thecart = [];
    return thecart;
  };
});