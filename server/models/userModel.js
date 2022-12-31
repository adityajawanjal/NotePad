const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:String,
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

UserSchema.pre("save", async function(next){
    if( ! this.isModified(this.password)){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

exports.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model("user",UserSchema);