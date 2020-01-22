import express from 'express';

const app = express();

app.post('/create/article', (req, res) => {
    res.send('<h1>article</h1>');
});