import React, {useEffect, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import '../styles/styles.css'
import Button from '@mui/material/Button';
import Card from '../components/card';
// Setup
import { createBoard } from '../constants/Cards';
import { shuffleArray } from '../utils/utils';
// Types
import { CardType } from "../constants/Cards"
// Styles
import { Grid, ContentBox, Content1, Content2, Content3 } from '../App.styles';
// Image imports
import Ballons from '../assets/images/Group 30099.svg';
import RocketShip from '../assets/images/Group 30101.svg';

const GameScreen = ({name, name1}:{name:any, name1:any})=> {

  function EndGame(){
    window.opener = null;
    window.open('', '_self');
    window.close();
  }

  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [points, setPoints] = useState(0)

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log('Game Won!');
      setGameWon(true);
      <Link to="/Winner"></Link>
    }
  }, [cards.length, matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    // If this is the first card that is flipped, just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setPoints(points => points + 2)
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // If it's not a matched pair, wait one second and flip them back
    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  function startOver() {        
    setGameWon(false)
    setCards([])        
    setClickedCard(undefined)        
    setPoints(0)        
    setMatchedPairs(0)    
}
  
  return (
    <div className="Game">
        <div className="App-header">
          <label id="Header">Memory</label>
          <Link to="/" style={{textDecoration:'none'}}>
            <Button variant="contained" id="Button" onClick={startOver}>Restart Game</Button>
          </Link>
          <Button variant="contained" color="error" onClick={EndGame}>Exit Game</Button>
        </div>
        <ContentBox>
          <Content1>
            <img id="Image" src={Ballons} alt='Balloons'/>
            <label id='name'>Name:{name}</label>
            <label id='score'>Score:{points}</label>
          </Content1>
          <Content2>
            <Grid>
              {cards.map(card => (
                <Card key={card.id} card={card} callback={handleCardClick} />
              ))}
            </Grid></Content2>
          <Content3>
            <img id="Image" src={RocketShip} alt='RocketShip'/>
            <label id='name'>Name:{name1}</label>
            <label id='score'>Score:{points}</label>
          </Content3>
        </ContentBox>
        <Outlet/>
    </div>
  );
}

export default GameScreen;