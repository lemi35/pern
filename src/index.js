/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
<App />, 
document.getElementById('root')
);
 */

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import './index.css';
import App from './App';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootContainer = createRoot(root);
rootContainer.render(rootElement);