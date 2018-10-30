import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const documentElement = document.getElementById('Pung');

if (!documentElement) {
  throw Error('React document element not found');
}

ReactDOM.render(<App />, documentElement);
