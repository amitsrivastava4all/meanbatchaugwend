app.controller('contactctrl',function($scope,$routeParams){
    $scope.msg = $routeParams.name;
})