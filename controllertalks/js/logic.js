const app = angular.module("myapp",[]);

app.controller("myctrl1",($scope)=>{
    $scope.shareIt=function(){
        $scope.$broadcast('sharetoall',{'mydata':$scope.data});
    }
    $scope.$on('childevent',function(event, args){
        $scope.result2 = args.childdata;
    });
})


app.controller("myctrl2",($scope)=>{
    $scope.result = '';
    $scope.$on('sharetoall',function(event, args){
        $scope.result = args.mydata;
    })
    $scope.shareItToParent=()=>{
        $scope.$emit('childevent',{'childdata':$scope.childdata})
    }
})

app.controller("myctrl3",($scope)=>{
    $scope.result = '';
    $scope.$on('sharetoall',function(event, args){
        $scope.result = args.mydata;
    })
    
})