angular.module('starter')
  .controller("signupCtrl", function ($scope, $http) {

    $scope.newUser = {};

    $scope.submit = function () {

      $http.post("/signup", $scope.newUser).then(function (response) {

      //  $scope.displaySignup = response.data;
        //console.log("only response is " , response , " & response.data is " , response.data);
        // console.log("that is shown on console.log " , $scope.displaySignup);

      }, function myError(err) {
        console.log("signUp.js error " + err.statusText);
        $scope.displaySignup = err.statusText;

      });
    }
  });
