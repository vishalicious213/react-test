import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import ArtistGallery from './components/ArtistGallery';
import NavBar from './components/NavBar';
// import styled from 'styled-components';
import ButtonMaker from './components/React-buttons';
import HandleEvents from './components/HandleEvents';
import HandleEventsClass from './components/HandleEventsClass';
import Incrementor from './test-reducer/Incrementor';
import TodoReducer from './test-reducer/TodoList';
import SyntaxHighlighterTest from './components/react-syntax-highlighter/react-syntax-highlighter-test';

function App() {
  return (
    <div className="mainProgram">
      <section className="top">
        <NavBar />
        {/* <Route path='/upload' component={} /> */}
        {/* <Route path='/sign-in' component={} /> */}
        
        <Route path='/handleEventsFunctional' component={HandleEvents} />
        <Route path='/handleEventsClass' component={HandleEventsClass} />
        
        <Route path='/buttonmaker' component={ButtonMaker} />

        <Route path='/todolist' component={TodoReducer} />
        <Route path='/incrementor' component={Incrementor} />

        <Route path='/syntaxhighlighter' component={SyntaxHighlighterTest} />

        {/* <div className="banner">
          <h1>Art Portfolio</h1>
        </div>

        <form className="artistSearchForm">
          <input className="artistSearchBox" type="text" name="search" placeholder="&#x1f50d; Search artists..." />
        </form> */}
      </section>

      {/* <ArtistGallery /> */}

      {/* <ButtonMaker /> */}
      {/* <HandleEvents /> */}
      {/* <HandleEventsClass /> */}
      {/* <Incrementor /> */}
      {/* <TodoReducer /> */}
    </div>
  );
}

export default App;

// React Hooks useReducer Tutorial
// https://www.youtube.com/watch?v=wcRawY6aJaw