import React, { Component } from 'react';
import Calculator from "./components/Calculator";
import Quote from './components/Quote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator/>
        <Quote/>
      </div>
    );
  }
}

export default App;
