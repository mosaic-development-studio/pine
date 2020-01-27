import express from 'express';
import { GET_ARTICLE_ROUTE, LANDING_ROUTE, POST_ARTICLE_ROUTE } from './constants';
import { articleGETRouteHandler, articlePOSTRouteHandler } from './routes/articleRouteHandler';
import { landingRouteHandler } from './routes/landingRouteHandler';

const router = express.Router();

router.get(LANDING_ROUTE, landingRouteHandler);

router.get(GET_ARTICLE_ROUTE, articleGETRouteHandler);

router.post(POST_ARTICLE_ROUTE, articlePOSTRouteHandler);

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