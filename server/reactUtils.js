import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const renderApplicationToString = (Application, props) => {
    return ReactDOMServer.renderToString(<Application {...props} />);
};