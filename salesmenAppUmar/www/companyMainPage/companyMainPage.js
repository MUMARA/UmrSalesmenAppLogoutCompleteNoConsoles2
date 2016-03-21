angular.module('starter')
    .controller("companyMainPageCtrl", function ($scope,$http,adminCompanyData) {
   $scope.companyData =  $scope.adminCompanyData.displayAdmin;
    
    });