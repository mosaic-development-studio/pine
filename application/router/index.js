import {
    articleGETRouteHandler,
    articlePOSTRouteHandler,
    getArticleData
} from './routes/articleRouteHandler';
import bodyParser from 'body-parser';
import express from 'express';
import {
    GET_ARTICLE_ROUTE,
    GET_ARTICLES_ROUTE,
    LANDING_ROUTE,
    POST_ARTICLE_ROUTE
} from './constants';
import { landingRouteHandler } from './routes/landingRouteHandler';
import path from 'path';

const router = express.Router();

router.use(
    express.static(
        path.resolve(
            __dirname,
            '../..',
            'dist'
        ),
        { maxAge: '30d' }
    )
);

router.use(bodyParser.json());

router.get(LANDING_ROUTE, landingRouteHandler);
router.get(GET_ARTICLE_ROUTE, articleGETRouteHandler)
router.get(GET_ARTICLES_ROUTE, getArticleData);

router.post(POST_ARTICLE_ROUTE, articlePOSTRouteHandler);

export { router };