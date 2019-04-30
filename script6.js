   var app = angular.module('myApp', []);

   app.controller('showController', function($scope) {
     $scope.IsVisibleA = false;
     $scope.IsVisibleB = false;

     $scope.Show = function() {
       $scope.IsVisibleA = $scope.IsVisibleA = true;
       $scope.IsVisibleB = $scope.IsVisiblebB = false;
     }
          $scope.Hide = function() {
         $scope.IsVisibleA = $scope.IsVisibleA = false;
         $scope.IsVisibleB = $scope.IsVisibleB = true;
       }
   });
