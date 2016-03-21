var app = angular.module('starter');
app.controller("signInCtrl", function ($scope, $http, authDataService) {

  $scope.dologin = function (signIn) {

    authDataService.dologin(signIn);

  };
  $scope.data = authDataService.data;


});
