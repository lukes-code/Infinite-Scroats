import React from 'react';
import logo from './logo.svg';
import Goat from './components/addGoat';
import './App.css';
import Toggle from './components/toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Infinite Scrolling Goats
          <span className="small-text">
            (Not Infinite Scrotes, sorry)
          </span>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Toggle>
          <Goat />
          <Goat />
          <Goat />
          <Goat />
          <Goat />
        </Toggle>
    </div>
  );
}

export default App;
