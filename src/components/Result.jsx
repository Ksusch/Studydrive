import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <input type="text" value={this.props.value} readOnly />
      </div>
    );
  }
}

export default Result;
