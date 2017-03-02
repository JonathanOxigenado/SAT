
var JonathanBlanco = angular.module('JonathanBlanco', []);
JonathanBlanco.controller('Operaciones', function($scope) {
$scope.precio = 50
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 