import React, { Component } from 'react';
import '../styles/App.css';
import Menu from './Menu';
import Section1 from './Section1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Section1 />
      </div>
    );
  }
}

export default App;
