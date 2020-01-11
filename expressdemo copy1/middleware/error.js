module.exports = function(req,res,next){
    //res.send('OOPS U Type Something Wrong....');
    const path = require('path');
    const basePath = path.normalize(__dirname+'/..');
    const fullPath = path.join(basePath,'public/error.html');
    console.log('Full Path is ',fullPath);
    res.status(404).sendFile(fullPath);
}