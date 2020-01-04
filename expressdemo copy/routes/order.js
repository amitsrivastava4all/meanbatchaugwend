const express = require('express');
const routes = express.Router();
routes.get('/order',(req,res)=>{
    res.send('Order');
})
module.exports = routes;