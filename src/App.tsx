import * as React from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Ballons from './assets/images/Group 30099.svg';
import RocketShip from './assets/images/Group 30101.svg';

export default function App(this: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box id="modal">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
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