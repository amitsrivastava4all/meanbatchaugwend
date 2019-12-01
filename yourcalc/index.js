const obj = {
    add(x,y){
        x = x || 0;
        y = y || 0;
       return x + y;
    },
    sub(x = 0, y = 0){
        return x - y;
    }
}
module.exports = obj;