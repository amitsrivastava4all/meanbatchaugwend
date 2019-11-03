app.filter('resultformatter',()=>{
    return function(args){
        if(!args){
            return "SUM is 0";
        }
        return "SUM IS "+args+".";
    }
})