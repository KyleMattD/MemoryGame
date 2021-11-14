import React from 'react';
import '../styles/styles.css'
// Routing
import { Outlet, Link } from "react-router-dom";
// Button styling
import Button from '@mui/material/Button';
// Image imports
import Winner from '../assets/images/Group 30120.svg'
import Ballons from '../assets/images/Group 30099.svg';
import RocketShip from '../assets/images/Group 30101.svg';
import trophy from '../assets/images/Icon.svg'

const WinnersScreen = ({name, name1, points}:{ name:any, name1:any, points:any})=> {
  
  
  return (
    <div className="Winners">
      <div id="Celebration">
        <label id="Win">Well Done!</label>
        <label id="playername">{name}</label>
      </div>
      <img src={Winner} alt="Winner"/>
      <div id="first"><img src={trophy} alt="trophy"/></div>
      <div id="player1">
        <img id="winnerimage" src={Ballons} alt="balloons"/>
        <label id="spacing">1st Place</label>
        <label id="spacing">Player: {name}</label>
        <label id="spacing">Score: {points}</label>
      </div>
      <div id="player2">
        <img id="secondplaceimage" src={RocketShip} alt="ship"/>
        <label id="spacing2">2nd Place</label>
        <label id="spacing2">Player: {name1}</label>
        <label id="spacing2">Score: {points}</label>
      </div>
      <Link to="/" style={{textDecoration:'none'}}>
        <Button variant="contained" id="play">Play Again</Button>
      </Link>
      <Outlet/>
    </div>
  );
}

export default WinnersScreen;