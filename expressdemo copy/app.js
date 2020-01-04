const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',orderRoutes);
app.use('/',userRoutes);

app.use('/admin',adminRoutes);
app.use(require('./middleware/error'));
// app.post('/dologin',(req,res)=>{
//     console.log('Body ',req.body);
//     if(req.body.userid== req.body.pwd){
//         res.send('Welcome '+req.body.userid);
//     }
//     else{
//         res.send('Invalid Userid or Password');
//     }
// });
// app.get('/dologin',(req,res)=>{
//     console.log("I am Inside do Login ",req.query.userid);
//     if(req.query.userid== req.query.pwd){
//         res.send('Welcome '+req.query.userid);
//     }
//     else{
//         res.send('Invalid Userid or Password');
//     }
// })
app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start');
})