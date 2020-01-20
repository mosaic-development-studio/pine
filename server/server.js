import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Application } from '../components/Application.jsx';

const app = express();
const router = express.Router();

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            return res.status(500).send('An error occured');
        }

        return res.send(
            data.replace(
                '<main id="application"></main>',
                `<main id="application">${ReactDOMServer.renderToString(<Application />)}</main>`
            )
        );
    });
};

router.use('^/$', serverRenderer);

router.use(
    express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
);


app.use(router);

app.listen(3000, () => {
    console.log('SSR running on port 3000');
});