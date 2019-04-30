 var app = angular.module('myApp',[]);

    app.controller('showController',['$scope',function($scope){
        $scope.IsVisible = false;

        $scope.Show = function(){
            $scope.IsVisible = $scope.IsVisible = false;

              $scope.Hide = function(){
            $scope.IsVisible = $scope.IsVisible = true;
        }
        }

      }]);
