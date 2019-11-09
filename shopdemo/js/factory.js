app.factory('shopdata',($http,$q, SHOPURL)=>{
    console.log('Factory Called...');
    let arr = [];
    const object =  {
        sortByPrice(choice){
            
           return arr.sort(function(first, second){
                if(choice=='name'){
                    return first.name.localeCompare(second.name);
                }
                else{
                    return first.price - second.price;
                }
               
            })
        },

        searchByPrice(price){
            if(arr.length>0){
                return arr.filter(obj=>obj.price>=price);
            }
            else{
                return [];
            }
        },
        
        getShopData(){
            console.log('Array is ',arr);
            if(arr.length==0){
            var defer = $q.defer(); 
            $http.get(SHOPURL).then(function(data){
                console.log("Success is ",data);
                  defer.resolve(data);  
                  arr = data.data['mobiles'];
                  console.log('Array is Filled ',arr);
            },function(err){
                 defer.reject(err);   
                 console.log('Fail is ',err);
            })
            return defer.promise;
        }
        else{
            console.log('Inside Else ',arr);
            return arr;
        }
        }
    };
    return object;
})