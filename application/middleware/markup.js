import {
    APPLICATION_HTML,
    APPLICATION_ROOT_OPENING_TAG
} from './constants';
import React from 'react';
import { renderToString } from 'react-dom/server';

export const convertApplicationToString = (ReactApplication, data) => {
    return renderToString(<ReactApplication {...data} />);
};

export const applicationMarkup = html => APPLICATION_HTML.replace(
    APPLICATION_ROOT_OPENING_TAG,
    APPLICATION_ROOT_OPENING_TAG + html
);