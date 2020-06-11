import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; //main app component
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // grabbing the div in public/index.html and inserting the app component
);


