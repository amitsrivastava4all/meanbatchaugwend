const express = require('express');
const routes = express.Router();
routes.get('/dashboard',(req,res)=>{
    const menuHelper= require('../db/helpers/menu');
    const menus = menuHelper.fillMenu();
    res.render('dashboard',{user:req.session.userid,allmenus:menus});
});
routes.post('/dologin',(req,res)=>{
    console.log('Body ',req.body);
    if(req.body.userid== req.body.pwd){
       // const menuHelper= require('../db/helpers/menu');
        //const menus = menuHelper.fillMenu();
        req.session.userid=req.body.userid;
        res.redirect('/dashboard');
       // res.render('dashboard',{user:req.session.userid,allmenus:menus});
       /* const pageUtil = require('../utils/pageutils');
        const fullPath = pageUtil.getFullPath('public/dashboard.html');
        res.sendFile(fullPath);
        */
        // res.sendFile()
       // res.send('Welcome '+req.body.userid);
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