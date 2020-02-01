const express = require('express');
const routes = express.Router();
routes.get('/matches',(req,res)=>{
    const url = "https://cricapi.com/api/matches/A8zoDoPaQgefmB7KunnSuApSgL73";
    
    var request = require('request');
request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    if(error){
        res.json({'message':'Cant Connect to API'});
    }
    else{
        res.json(body);
    }
   
});
    
   
});
module.exports = routes;