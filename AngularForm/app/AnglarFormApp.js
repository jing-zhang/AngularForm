var angularFormApp = angular.module('angularFormApp', ['ngRoute','ui.bootstrap']);

angularFormApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/newEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo:"/home"
        });
});
