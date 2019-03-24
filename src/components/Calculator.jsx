import React, { Component } from 'react';
import Result from './Result';
import KeyPad from './KeyPad';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    switch (event.target.innerHTML) {
      case 'AC':
        this.props.setResult('');
        break;
      case 'C':
        this.props.setResult(this.props.result.slice(0, -1));
        break;
      case '=':
        this.props.setResult(eval(this.props.result));
        break;
      default:
        this.props.setResult(this.props.result + event.target.innerHTML);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Result value={this.props.result} />
        <KeyPad onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
