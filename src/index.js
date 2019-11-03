import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

// developemnt fetch mock
if ('production' !== process.env.NODE_ENV) {
    require('./mocks')    
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
