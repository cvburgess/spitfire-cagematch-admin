import React, { Component } from 'react';
import logo from './assets/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
