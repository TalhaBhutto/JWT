const mongo=require('mongoose')
let LoginSchema=new mongo.Schema({
    _id:mongo.Schema.Types.ObjectId,
    name:String,
    email:String,
    city:String,
    password:String
});
module.exports=mongo.model('Login',LoginSchema);