const UserSchema = require('../models/user');
const userOperations = {
    addUser(userObject){
        UserSchema.create(userObject,(err)=>{
            if(err){
                console.log("Not Able to add a user");
            }
            else{
                console.log("User Added in DB");
            }
        })
    },
    updateUser(userObject){

    },
    deleteUser(userObject){

    },
    findUser(userObject){
        UserSchema.findOne(userObject,(err,doc)=>{
            if(err){
                console.log('Error During Find ',err);
            }
            else{
                console.log('Doc is ',doc);
            }
        })
    }
}
module.exports = userOperations;