import React, { Component } from 'react';

class KeyPad extends Component {
  render() {
    return (
      <div className="keypad">
        <div className="keypad-row">
          <button className="col-2">AC</button>
          <button className="col-1">{'<'}</button>
          <button className="col-1">/</button>
        </div>
        <div className="keypad-row">
          <button className="col-1">7</button>
          <button className="col-1">8</button>
          <button className="col-1">9</button>
          <button className="col-1">x</button>
        </div>
        <div className="keypad-row">
          <button className="col-1">4</button>
          <button className="col-1">5</button>
          <button className="col-1">6</button>
          <button className="col-1">-</button>
        </div>
        <div className="keypad-row">
          <button className="col-1">1</button>
          <button className="col-1">2</button>
          <button className="col-1">3</button>
          <button className="col-1">+</button>
        </div>
        <div className="keypad-row">
          <button className="col-2">0</button>
          <button className="col-1">.</button>
          <button className="col-1">=</button>
        </div>
      </div>
    );
  }
}

export default KeyPad;
