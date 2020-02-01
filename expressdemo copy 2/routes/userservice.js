const express = require('express');
const routes = express.Router();
const logger = require('../utils/logger');
routes.get('/photo/:id',(req,res)=>{
    var photoId = req.params.id;
    
    res.status(200).json({'message':'Ur Photo Id Details are '+photoId});
})
routes.get('/userorder',(req,res)=>{
    var clientToken = req.query.tokenId ;
    const token= require('../utils/token');
    let result = token.verifyToken(clientToken);
    if(result){
    var oid = req.query.oid;
    res.json({'message':'Ur Order Id Details are '+oid});
    }
    else{
        res.json({'message':'UnAuthorized User'});
    }
})
routes.post('/login',(req,res)=>{
    logger.debug('Inside Login');
    const codes = require('../utils/statuscode');
    console.log("LOGIN JSON is ",req.body);
    if(req.body.userid == req.body.pwd){
        const menuHelper= require('../db/helpers/menu');
        const menus = menuHelper.fillMenu();
        const token= require('../utils/token');
        const tokenId = token.generateToken(req.body.userid);
        res.status(200).json({'status':codes.SUCCESS,'message':'Welcome '+req.body.userid,'menu':menus, token:tokenId});
    }
    else{
        res.status(200).json({'status':codes.FAIL,'message':'Invalid Userid or Password'})
    }
    logger.debug('Login Ends');
})
module.exports = routes;