import express from 'express';
import mongoose from 'mongoose';

const server = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

export { server };