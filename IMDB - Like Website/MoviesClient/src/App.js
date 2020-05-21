import React from 'react';
import {Navbar} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import Movies from './containers/Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
        <CinemaNavBar/>
        <Movies/>
        <img src='/images/PopcornFooter.png' alt='popcorn' style={{width:'100%'}}/>
    </div>
  );
}
export default App;

const CinemaNavBar = () =>
   (
    <Navbar className='CinemaNavbar'>
      <Navbar.Header>
        <a href='/'>
          <img 
            className='Logo' 
            src='https://assets.cdn.watchdisneyfe.com/delta/assets/abc/abc.png' 
            alt='abc' 
            width='55px'/>
        </a>
      </Navbar.Header>
      <Navbar.Body>
      </Navbar.Body>
    </Navbar>
  );
