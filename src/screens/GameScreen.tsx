import React from 'react';
import cardImages from '../constants/Cards';
import { Outlet, Link } from "react-router-dom";
import '../styles/styles.css'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function GameScreen(this: any) {

  function EndGame(){
    window.opener = null;
    window.open('', '_self');
    window.close();
  }
  
  return (
    <div className="Game">
        <div className="App-header">
          <label id="Header">Memory</label>
          <Link to="/" style={{textDecoration:'none'}}>
            <Button variant="contained" id="Button">Restart Game</Button>
          </Link>
          <Button variant="contained" color="error" onClick={EndGame}>Exit Game</Button>
        </div>
        <div>
            {cardImages.map((image) => <img key={image.src} src={image.src} alt="cards"/>)}  
        </div>
        <Outlet/>
    </div>
  );
}

export default GameScreen;