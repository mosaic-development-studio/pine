import React from 'react';
import ReactDOM from 'react-dom';

import { Navigation, Panel } from './components/presentational';
import { Provider } from './components/containers';

ReactDOM.render(
    <Provider>
        <Navigation>
            <h1>Hello world</h1>
        </Navigation>
        <Panel>
            <p>I am a panel</p>
        </Panel>
    </Provider>,
    document.getElementById('application')
);