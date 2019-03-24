import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };
    this.setResult = this.setResult.bind(this);
  }

  setResult(newResult) {
    this.setState({
      result: newResult
    });
  }

  render() {
    return (
      <div className="App">
        <Calculator setResult={this.setResult} result={this.state.result} />
        <Quote />
      </div>
    );
  }
}

export default App;
