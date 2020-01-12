const express = require('express');
const routes = express.Router();
routes.get('/photo/:id',(req,res)=>{
    var photoId = req.params.id;
    
    res.status(200).json({'message':'Ur Photo Id Details are '+photoId});
})
routes.get('/userorder',(req,res)=>{
    var oid = req.query.oid;
    res.send({'message':'Ur Order Id Details are '+oid});
})
routes.post('/login',(req,res)=>{
    const codes = require('../utils/statuscode');
    console.log("LOGIN JSON is ",req.body);
    if(req.body.userid == req.body.pwd){
        const menuHelper= require('../db/helpers/menu');
        const menus = menuHelper.fillMenu();
       
        res.status(200).json({'status':codes.SUCCESS,'message':'Welcome '+req.body.userid,'menu':menus});
    }
    else{
        res.status(200).json({'status':codes.FAIL,'message':'Invalid Userid or Password'})
    }
})
module.exports = routes;