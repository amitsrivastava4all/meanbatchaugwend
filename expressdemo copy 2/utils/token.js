const jwt = require('jsonwebtoken');
module.exports = {
    secret : 'thisissecret',
    generateToken(userid){
        let tokenId = jwt.sign({'uid':userid},this.secret,{expiresIn:'1h'});
        
        console.log("Token Id is ",tokenId);
        return tokenId;
    },
    verifyToken(tokenId){
        let decoded = jwt.verify(tokenId,this.secret);
        if(decoded && decoded.uid){
            console.log("Decoded ",decoded.uid);
            return true;
        }
        else{
            console.log("Invalid Token ");
            return false;
        }
    }
}
// var tokenNumber = token.generateToken('ram');
// token.verifyToken(tokenNumber);