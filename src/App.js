import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import DemoProvider from './Provider/DemoProvider';
import TestComponent from './TestComponent';

function App() {
  return (
    <DemoProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TestComponent />
        </header>
      </div>
    </DemoProvider>
  );
}

export default App;
