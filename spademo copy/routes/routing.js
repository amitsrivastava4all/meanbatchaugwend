const app = angular.module('myapp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
$routeProvider.when('/',{templateUrl:'./views/home.html'})
.when('/about',{templateUrl:'./views/aboutus.html'})
.when('/contact/:name',{templateUrl:'./views/contact.html',controller:'contactctrl'})
//.otherwise({template:'U Type Wrong URL or INvalid Link'})
//.otherwise({templateUrl:'./views/error.html'})
.otherwise({redirectTo:'/'})
} )