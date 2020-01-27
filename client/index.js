import React from 'react';
import ReactDOM from 'react-dom';

import { LandingView } from './components/views/LandingView';

ReactDOM.hydrate(<LandingView />, document.getElementById('reactRoot'));