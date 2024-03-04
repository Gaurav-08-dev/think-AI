import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {type:String,required:true,unique:true},
    email: {type:String,required:true,unique:true},
    username: {type:String,required:true,unique:true},
    firstName: {type:String},
    lastName: {type:String},
    planId: {type:String,default:1},
    creditBalance:{type:Number, required:true,default:10},
    photo: {type:String, required:true}
})

const User = models?.User || model("User",UserSchema)
export default User;
