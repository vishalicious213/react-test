import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const screensize = `${window.innerWidth} / ${window.screen.width}`;

  return (
    <nav className="navBar">
      <Link className='link home' title={screensize} to='/'>
        <i className="navIcon fas fa-home"></i>
      </Link>

      {/* <Link to='/upload'>
      <i className="navIcon fas fa-plus-circle" title="Upload"></i>
      </Link>

      <Link to='/sign-in'>
      <i className="navIcon fas fa-sign-in-alt" title="Sign in/Register"></i>
      </Link> */}

      <Link className='link' to='/handleEventsFunctional'>Handle Events Functional</Link>
      <Link className='link' to='/handleEventsClass'>Handle Events Class</Link>
      <Link className='link' to='/buttonmaker'>Buttonmaker</Link>
      <Link className='link' to='/incrementor'>Reducer Incrementor</Link>
      <Link className='link' to='/todolist'>Reducer Todo</Link>
      <Link className='link' to='/syntaxhighlighter'>Syntax Highlighter</Link>
    </nav>
  );
}

export default NavBar;
