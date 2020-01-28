import { Schema } from 'mongoose';

export const detailsSchema = new Schema({
    key: String,
    type: String, // asset type [audio, image, text, video]
    value: String
});