import React from 'react';
import '../styles/styles.css'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function WinnersScreen() {
  
  return (
    <div className="Winners">
      <div id="Celebration">
        <label>Well Done!</label>
        <label>{}</label>
      </div>
      <div id="player1">
        <label></label>
      </div>
      <div id="player2">
        <label></label>
      </div>
      <button>Play Again</button>
    </div>
  );
}

export default WinnersScreen;