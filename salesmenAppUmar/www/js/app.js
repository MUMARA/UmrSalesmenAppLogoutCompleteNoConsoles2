var app = angular.module('starter', ['ionic', 'ui.router']);


app.config(function ($stateProvider, $httpProvider) {
    $stateProvider
        .state("signUp", {
            url: "/signUp",
            templateUrl: "signUp/signUp.html",
            controller: "signupCtrl"
        })
        .state("signIn", {
            url: "/signIn",
            templateUrl: "signIn/signIn.html",
            controller: "signInCtrl"
        })
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html",
            controller: "dashboardCtrl"
        })
        .state("registerCompany", {
            url: "/registerCompany",
            templateUrl: "registerCompany/registerCompany.html",
            controller: "registerCompanyCtrl"
        })
        .state("companyMainPage", {
            url: "/companyMainPage",
            templateUrl: "companyMainPage/companyMainPage.html",
            controller: "companyMainPageCtrl"
        })

    $httpProvider.interceptors.push('httpInterceptor');
});

