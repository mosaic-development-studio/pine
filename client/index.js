import React from 'react';
import ReactDOM from 'react-dom/server';

import { Application } from '../components/Application';

ReactDOM.hydrate(<Application />, document.getElementById('application'));