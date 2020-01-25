import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { router } from '../router';

const app = express();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

router.use(
    express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
);

app.use(router);

app.listen(3000, () => {
    console.log('SSR running on port 3000');
});