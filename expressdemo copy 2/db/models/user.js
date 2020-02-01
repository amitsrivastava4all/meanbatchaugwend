// Schema Define
const connection = require('../connection');
const schemaStructure = {
userid:{type:String,require:true},
password:String,
status:{type:String,default:'A'}//,
//orders:[]

};
const userSchema = new connection.Schema(schemaStructure);
const UserSchema = connection.model('users',userSchema);
module.exports = UserSchema;