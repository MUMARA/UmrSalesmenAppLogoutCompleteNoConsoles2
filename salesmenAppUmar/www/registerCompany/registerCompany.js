angular.module('starter')
    .controller("registerCompanyCtrl", function ($scope, $http, $state, $location) {
        $scope.admin = {};
        $scope.registerCompany = function (admin) {

            $http.post("/registerCompany",
                {
                    
                    
                    
                    companyName: $scope.admin.companyName,
                    companyAddress: $scope.admin.companyAddress,
                    companyPhone: $scope.admin.companyPhone,
                    mongoUid:localStorage.getItem("uid")
                }
            ).then(function (response) {
                $scope.displayAdmin = response.data;
                $state.go('companyMainPage')
            })

            console.log("admin is", $scope.admin);
        }
    })

