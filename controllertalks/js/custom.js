const app = angular.module('myapp',[]);

app.factory('myfactory',()=>{
    return {
        x:100
    }
})

app.controller('myctrl5',($scope,myfactory)=>{
    $scope.takeData=()=>{
        myfactory.x =  $scope.mydata;
        console.log("Take Data Call ",myfactory.x);
    }
})

app.controller('myctrl6',($scope,myfactory)=>{
    $scope.giveMeData= ()=>{
        $scope.result = myfactory.x;
    }
    $scope.result = myfactory.x;
})

app.controller('myctrl',($scope,$rootScope)=>{
$scope.shareIt= ()=>{
    $rootScope.result = $scope.data;
}
})

app.controller('myctrl2',($scope)=>{
    
})

app.controller('myctrl3',($scope)=>{
    
})
app.controller('myctrl4',($scope)=>{
    
})