import React from 'react';
import './App.css';

function StartScreen() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Memory</label>
          <button>Exit Game</button>
        </div>
      </header>
      <body>
        <div>
          <label>Are You Ready To Play?</label>
          <button></button> 
        </div>
      </body>
    </div>
  );
}

export default StartScreen;