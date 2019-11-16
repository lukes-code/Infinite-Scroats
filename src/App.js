import React from 'react';
import logo from './logo.svg';
import './App.css';

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
        <button className="btn-primary">Show me the goats</button>
      </header>
    </div>
  );
}

export default App;
