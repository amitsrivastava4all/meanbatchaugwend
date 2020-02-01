const mongoose = require('mongoose');
const config = require('../config/config');
const options = {
    useNewUrlParser: true,
    poolSize:10
};
mongoose.connect(config.dburl,options,(err=>{
    if(err){
        console.log('Connection Failed...');
    }
    else{
        console.log("Connection Created");
    }
}));
module.exports = mongoose;