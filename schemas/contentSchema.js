import { Schema } from 'mongoose';

const TYPES = ['paragraph', 'image', 'video', 'audio', 'quote'];

export const contentSchema = new Schema({
    type: String, // article subcontent type
    content: String // text or a path to file
});