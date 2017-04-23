var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', '$http', function($scope, $http) {

console.log('OneController is accessed');

var getAPI = function() {
  var book = 'Between the world and me';
  $http.get('https://openlibrary.org/api/books?bibkeys=ISBN:9780812993547&jscmd=data&format=json').then(function(response) {
    console.log(response);
  });
  };
  getAPI();
  // var searchAPI = function() {
  //   var book = 'Between the world and me';
  //   $http.get('http://openlibrary.org/search.json?title=' + book).then(function(response) {
  //     console.log(response);
  //   });
  //   };
  //
  //   searchAPI();
}]);
