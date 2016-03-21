var app = angular.module('starter');

app.service('authDataService', function ($http) {
  // $scope.authDataValue = res.data;
  var vm = this;

  this.dologin = function (signIn) {

    $http.post("/signIn",
      {
        email: signIn.email,
        password: signIn.password
      }
      )
      .then(function (res) {

        vm.data = res.data;

       // console.log("data is ", vm.data);


        localStorage.setItem("uid", vm.data.record.uid);
       // localStorage.setItem("token", vm.data.record.token);

      }, function myError(err) {

        console.log(err, "signIn.js err")
      })
  }
});


app.factory("httpInterceptor", function () {
  return {
    request: function (config) {

      var token = localStorage.getItem("token");
      var uid = localStorage.getItem("uid");
  //  console.log("signIn interceptor config console.log");

      if (token) {
        config.url = config.url + "?uid=" + uid + "&token=" + token;
        console.log("signIn interceptor if console.log uid ", uid, " & token is ", token);
      }
      return config;
    }
  }
});
