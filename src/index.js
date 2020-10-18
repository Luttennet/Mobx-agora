import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Inventory from './stores/Inventory';
import { Provider } from 'mobx-react';

const inventory = new Inventory()
const store = {inventory}

ReactDOM.render(
  // <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
