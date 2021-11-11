import * as React from 'react'
import { Router } from '@reach/router';
import './App.css';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <Router>
      <StartScreen path="/start"/>
      <GameScreen path="/games"/>
    </Router>
  );
}