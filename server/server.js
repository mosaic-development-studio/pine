import path from 'path';
import fs from 'fs';

import express from 'express';
import mongoose from 'mongoose';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Application } from '../components/Application.jsx';

const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            return res.status(500).send('An error occured');
        }

        const dataFixture = {
            content: [{
                title: 'Some section title',
                body: 'Some section body'
            }],
            heading: 'Inuun',
            heroImageSource: 'some-pic.jpg',
            subheading: 'God of the land',
            type: 'God'
        };

        return res.send(
            data.replace(
                '<main id="application"></main>',
                `<main id="application">${ReactDOMServer.renderToString(
                    <Application {...dataFixture} />
                )}</main>`
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