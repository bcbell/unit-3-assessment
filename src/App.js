import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector/>
          <Circles/>
        </main>
      </div>
    );
  }
}

export default App;
