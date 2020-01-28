import {
    APPLICATION_ROOT_OPENING_TAG,
    APPLICATION_ROOT_CLOSING_TAG,
    APPLICATION_ROOT_TAG,
    HTML_FILE_PATH
} from './constants';
import fs from 'fs';
import path from 'path';
import { renderApplicationToString } from './reactUtils';

export function setupRouteForRendering(config) {
    const { getData, Application } = config;

    return function(req, res, next) {
        fs.readFile(path.resolve(HTML_FILE_PATH), 'utf8', function (err, data) {
            if (err) {
                console.error(err);

                return res.status(500).send('An error occured');
            }

            res.send(
                data.replace(
                    APPLICATION_ROOT_TAG,
                    APPLICATION_ROOT_OPENING_TAG
                    + renderApplicationToString(Application, getData())
                    + APPLICATION_ROOT_CLOSING_TAG
                )
            );
        });
    }
}