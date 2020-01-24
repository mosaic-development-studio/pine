import express from 'express';

const router = express.Router();

router.get('/article/:articleName', (req, res) => {
    const name = req.params.articleName.split('_').join(' ');

    res.send(`<h1>${name}</h1>`);
});

router.get('/resource/:file', (req, res) => {
    const filePath = req.params.file;

    res.send(`<h1>${filePath}</h1>`)
});

router.get('/user/settings', (req, res) => {
    res.send('<h1>User settings<h1>');
});

router.get('/app/settings', (req, res) => {
    res.send('<h1>App settings</h1>');
});

router.get('/article/:articleName/edit/', (req, res) => {
    const name = req.params.articleName.split('_').join(' ');

    res.send(`<h1>Editing: ${name}<h1>`);
});

export { router };