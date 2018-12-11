import React, { Component } from 'react';
import './App.scss';
import Athelets from "./containers/Athelets/Athelets";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Athelets />
      </div>
    );
  }
}

export default App;
