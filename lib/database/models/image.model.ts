import mongoose, { Schema, Types, model, models,Document } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: number;
    transformationUrl?: number;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id:String,
        firstName:String,
        lastName:String,
    };
    createdAt: Date;
    updatedAt: Date;
}


const ImageSchema = new Schema({
    title:{type:String, required:true},
    transformationType:{type:String, required:true},
    publicId: {type:String, required:true},
    secureUrl:{type:String, required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Number},
    transformationUrl:{type:Number},
    aspectRatio: {type:String},
    color: {type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId, ref:'User'},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

const Image = models?.Image || model('Image',ImageSchema)

export default Image;