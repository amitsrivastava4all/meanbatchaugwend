app.controller('myctrl',($scope, myfactory, $filter)=>{
    $scope.add=()=>{
      let result = myfactory.add($scope.first, $scope.second);
      // let result =  parseInt($scope.first) + parseInt($scope.second);
        //$scope.output = $filter('resultformatter')(result);
        let fn = $filter('resultformatter');
        $scope.output = fn(result);
    }
})