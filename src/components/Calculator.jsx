import React, { Component } from 'react';
import Result from './Result';
import KeyPad from './KeyPad';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Result/>
        <KeyPad/>
      </div>
    );
  }
}

export default Calculator;
