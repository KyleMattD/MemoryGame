import * as React from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Ballons from './assets/images/Group 30099.svg';
import RocketShip from './assets/images/Group 30101.svg';

export default function App(this: any) {
  return (
    <div className="App">
        <div className="App-Header">
          <label id="header">Memory</label>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button id="medium"  variant="contained" color="error">Exit Game</Button>
          </Link>
        </div>
        <div>
          <label id="SubTitle">Are You Ready To Play?</label>
        </div>
        <div id="characters">
          <div id="p1">
            <img id="image" src={Ballons} alt='Balloons'/>
            <input id="space" placeholder="Name of Player 1"/>
          </div>
          <div id="p2">
            <img id="image" src={RocketShip} alt='RocketShip'/>
            <input id="space" placeholder="Name of Player 2"/>
          </div>
        </div>
        <div>
          <Link to="/games" style={{ textDecoration: 'none' }}>
            <Button style={{margin:60, height: 60, width:150, fontFamily:'Poppins', fontSize:18, borderRadius:'8px'}} variant="contained" color="success">Let's Play</Button>
          </Link>
        </div>
        <Outlet/>
    </div>
  );
}