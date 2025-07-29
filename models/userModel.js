const mongoose = require('mongoose');
const bcrypt=require('bcrypt')
const baseOption={
    discriminatorKey:'itemtype',
    collection:'items'

};
const userSchema= new mongoose.Schema({
  fullname:{
    type: String,
  },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
    },
},baseOption,{timestamps:true});
userSchema.pre("save",function(next){
    this.password=bcrypt.hashSync(this.password,10)
    next();

})
module.exports = mongoose.model('User', userSchema);
