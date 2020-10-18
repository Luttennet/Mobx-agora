import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './stores/Inventory';
import Market from './Components/Market';
import Item from './Components/Item';
import { inject, observer } from 'mobx-react';


const App  = inject("inventory") (observer ( () => {
  return (
    <div className="App">
      <Market />
    </div>
  );
}))


export default App;
