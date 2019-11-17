const app = angular.module("app",[]);
app.controller('myctrl',function($scope){
    $scope.data = 'Hello Controller Data';
});

app.controller('myctrl2',function($scope){
    $scope.data = 'Hello Controller2 Data';
});

// tcs-warn , tcs:warn , tcs_warn
app.directive("tcsWarn",function(){ return {
    templateUrl:'./directives/design.html',
    controller:'myctrl',
    restrict:'EA'
}})