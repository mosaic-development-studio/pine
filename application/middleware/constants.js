import fs from 'fs';
import path from 'path';

export const APPLICATION_HTML = fs.readFile(
    path.resolve(__dirname + '../../../client/index.html'),
    'utf8',
    function(err, data) {
        if (err) {
            console.error(err);

            return 'An error has occured';
        }

        return data;
    }
);
export const APPLICATION_ROOT_OPENING_TAG = '<div id="reactRoot">';