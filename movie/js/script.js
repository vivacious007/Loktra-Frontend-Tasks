var myApp = angular.module('myModule',['ngStorage']);
    myApp.controller("myController",function($scope,$http,$localStorage){
        $scope.$watch('search',function(){
            fetch();
        });
        $scope.search = "GodFather";
         function fetch(){
      $http.get("http://www.omdbapi.com/?t=" + $scope.search)
      .then(function(response){ $scope.details = response.data; });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
      .then(function(response){ $scope.related = response.data; });
    }
        $scope.update = function(movie){
		$scope.search = movie.Title;
    };
		$scope.addwish = function addwish(){
			$localStorage.setItem('Title',"{{movie.Title}}");
			$scope.message = "added to wishlist";
		}
    });