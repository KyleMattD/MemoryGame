import React from 'react';
import './App.css';
import cardImages from '../constants/Cards';

function GameScreen() {
  
  return (
    <div className="GameScreen">
        <div>
            <label>Memory</label>
            <button>Exit Game</button>
        </div>
        <div>
            {cardImages.map((image) => <img key={image.src} src={image.src} alt="cards"/>)}  
        </div>
    </div>
  );
}

export default GameScreen;