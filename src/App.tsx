import * as React from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

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
        <div>
          Some Content
        </div>
        <div>
          <Link to="/games" style={{ textDecoration: 'none' }}>
            <Button  variant="contained" color="success">Let's Play</Button>
          </Link>
        </div>
        <Outlet/>
    </div>
  );
}