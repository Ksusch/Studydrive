import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className="result">
        <input type="text" value={this.state.value} />
      </div>
    );
  }
}

export default Result;
