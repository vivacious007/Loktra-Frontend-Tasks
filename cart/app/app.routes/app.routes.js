app.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'app/home/home.html'
  })
  .when('/viewAll',{
    controller:'galleryController',
    templateUrl: 'app/gallery/gallery.html'
  })
  .when('/shoppingCart',{
    controller: 'shoppingCartController',
    templateUrl: 'app/shoppingCart/shoppingCart.html'
  })
  .when('/:type',{
    controller: 'galleryController',
    templateUrl: 'app/gallery/gallery.html'
  })
  .when('/:type/:id',{
    controller:'productController',
    templateUrl: 'app/product/product.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});