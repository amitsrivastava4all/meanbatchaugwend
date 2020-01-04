const express = require('express');
const routes = express.Router();
routes.post('/dologin',(req,res)=>{
    console.log('Body ',req.body);
    if(req.body.userid== req.body.pwd){
        res.send('Welcome '+req.body.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
});
routes.get('/dologin',(req,res)=>{
    console.log("I am Inside do Login ",req.query.userid);
    if(req.query.userid== req.query.pwd){
        res.send('Welcome '+req.query.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
})
module.exports = routes;