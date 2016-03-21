angular.module('starter')
  .controller("dashboardCtrl", function ($scope,$http,authDataService,$state, $location) {

    $scope.data = authDataService.data;
    $scope.logOut = function () {
      localStorage.removeItem("uid");
      $state.go('signIn');
      // localStorage.removeItem("token");
    }
    
    $scope.registerCompany = function(){

  
    }
  });
