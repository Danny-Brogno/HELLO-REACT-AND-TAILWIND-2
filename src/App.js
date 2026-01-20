import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { Header } from './components/header.js';
import {Main} from './components/main.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
