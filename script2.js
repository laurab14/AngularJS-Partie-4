var cars = angular.module('testCars', []);

cars.controller('modeleCtrl', function($scope) {
  $scope.modele =[
		{"marque":"Renault", "couleur":"verte"},
		{"marque":"Citroen", "couleur":"grise"},
		{"marque":"Opel", "couleur":"or"},
		{"marque":"Ferrari", "couleur":"rouge"},
		{"marque":"Peugeot", "couleur":"bleu"},
		{"marque":"Nissan", "couleur":"verte"}
];
});