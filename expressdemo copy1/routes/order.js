const express = require('express');
const routes = express.Router();
routes.get('/add',(req,res)=>{
    if(req.session && req.session.userid){
        res.send('add');
    }
    else{
        const pageUtil = require('../utils/pageutils');
        const fullPath = pageUtil.getFullPath('public/login.html');
        res.sendFile(fullPath);
    }
   
})
routes.get('/delete',(req,res)=>{
    res.send('delete');
})
module.exports = routes;