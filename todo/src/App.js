import React from 'react';
import logo from './logo.svg';
import './App.css';

const num = 35;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {flag && 'Flag is true'}
        <img src={logo} className="App-logo" alt="logo" />
        {48}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {flag ? 'flag is true' : 'flag is false'}
        </p>
        {null}
        {false}
        {undefined}
        {true}
        {num + 39}
        <p style = {{ color: 'green' }}>
          Hello World!
        </p>
        {num}
      </header>
    </div>
  );
}

export default App;
