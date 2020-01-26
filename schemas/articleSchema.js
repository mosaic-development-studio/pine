import { Schema } from 'mongoose';

export const articleSchema = new Schema({
    assetPath: String,
    content: [
        // array of content arrays denoting article sections
        // article sections are an array of objects describing the content
    ],
    details: {
        // some dynamic key/value pairs of type:String
    },
    subTitle: String,
    title: String,
    type: String,
});