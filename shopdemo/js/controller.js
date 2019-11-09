app.controller("myctrl",($scope,shopdata)=>{
    $scope.products = [];
    let promise = shopdata.getShopData();
   
    promise.then(function(data){
        $scope.products = data.data['mobiles'];
    },function(err){
        $scope.err = 'Unable to Contact the Server '+err;
    })
    $scope.doSort= function(){
        if($scope.sortby!='-1'){
        $scope.products = shopdata.sortByPrice($scope.sortby);
        }
    }
    $scope.searchIt=function(){
       let data =  shopdata.getShopData();
       let price = $scope.price;
       if(data instanceof Array){
           console.log('Rec the Array');
           $scope.products =  shopdata.searchByPrice(price);
       }
    }
})