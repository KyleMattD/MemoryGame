import * as React from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Ballons from './assets/images/Group 30099.svg';
import RocketShip from './assets/images/Group 30101.svg';


export default function App(this: any) {
  const [name, setName] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name1, setName1] = React.useState('');
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName1(event.target.value);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

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
            <Modal
              open={open}
              id="modal"
            >
              <Box id="modal">
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Name of Player 1"
                value={name}
                onChange={handleChange}
              />
              <Button onClick={handleClose} color="success">Save</Button>
              </Box>
            </Modal>
            <input id="space" placeholder="Name of Player 1" onClick={handleOpen} value={name}/>
          </div>
          <div id="p2">
            <img id="image" src={RocketShip} alt='RocketShip'/>
            <Modal
              open={open1}
              id="modal"
            >
              <Box id="modal">
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Name of Player 2"
                value={name1}
                onChange={handleChange1}
              />
              <Button onClick={handleClose1} color="success">Save</Button>
              </Box>
            </Modal>
            <input id="space" placeholder="Name of Player 2" onClick={handleOpen1} value={name1}/>
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

