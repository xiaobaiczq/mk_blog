var mongoose = require("mongoose");

var userSchema= new mongoose.Schema({
    username:'string',
    password:'string',
    nickname:'string',
    status:'number'
});

var userModel=new mongoose.model('user',userSchema,'user');

module.exports=userModel;
