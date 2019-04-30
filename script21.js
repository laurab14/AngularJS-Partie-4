var app = angular.module('myApp',[]);

app.controller('carsCtrl', ['$scope','$http', function($scope,$http){
  $http.get('voiture.json')
    .then(function(response) {
        $scope.car = response.data;
    });
}]);
