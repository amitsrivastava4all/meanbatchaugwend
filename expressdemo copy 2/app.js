const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/order');
const userService = require('./routes/userservice');
const callOtherService = require('./routes/callothers');
const logger = require('./utils/logger');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'Its My Life',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false , maxAge:10*60*1000
  }
  }))
  
app.set('view engine','ejs');
app.use(require('./middleware/cors'));
app.use('/ws',userService);
app.use('/api',callOtherService);
app.use('/admin',adminRoutes);
app.use('/',orderRoutes);
app.use('/',userRoutes);




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
    logger.debug("Server Started.....");
})