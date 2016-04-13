import React from 'react';
import ReactDOM from 'react-dom';

import AppRoot from './components/AppRoot.js';

const render = () => {
    ReactDOM.render(
        <AppRoot />,
        document.getElementById('app-root')
    );
};

render();
