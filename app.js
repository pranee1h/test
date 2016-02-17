var app=angular.module('myApp',['ngRoute','ngResource']);

app.config(function($routeProvider){
   
    $routeProvider
    
    .when('/',{
        templateUrl:'first.html',
        controller:'homeController'
    })
    
    .when('/forecast',{
        templateUrl:'forecast.html',
        controller:'forecastController'
    })
});

app.controller('homeController',['$scope',function($scope){
    
}]);

app.controller('forecastController',['$scope',function($scope){
    
}]);

