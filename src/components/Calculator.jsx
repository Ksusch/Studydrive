import React, { Component } from 'react';
import Result from './Result';
import KeyPad from './KeyPad';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    switch (event.target.innerHTML) {
      case 'AC':
        this.setState({
          result: ''
        });
        break;
      case 'C':
        this.setState({
          result: this.state.result.slice(0, -1)
        });
        break;
      case '=':
        this.setState({
          result: eval(this.state.result)
        });
        break;
      default:
        this.setState({
          result: this.state.result + event.target.innerHTML
        });
    }
    console.log('this is:', event.target.innerHTML);
  }

  render() {
    return (
      <div className="calculator">
        <Result value={this.state.result} />
        <KeyPad onClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
