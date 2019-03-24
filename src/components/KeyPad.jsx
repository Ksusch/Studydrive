import React, { Component } from 'react';

class KeyPad extends Component {
  render() {
    return (
      <div className="keypad">
        <div className="keypad-row">
          <button className="col-2" onClick={this.props.onClick}>
            AC
          </button>
          <button className="col-1" onClick={this.props.onClick}>
            C
          </button>
          <button className="col-1 operation" onClick={this.props.onClick}>
            /
          </button>
        </div>
        <div className="keypad-row">
          <button className="col-1 number" onClick={this.props.onClick}>
            7
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            8
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            9
          </button>
          <button className="col-1 operation" onClick={this.props.onClick}>
            *
          </button>
        </div>
        <div className="keypad-row">
          <button className="col-1 number" onClick={this.props.onClick}>
            4
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            5
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            6
          </button>
          <button className="col-1 operation" onClick={this.props.onClick}>
            -
          </button>
        </div>
        <div className="keypad-row">
          <button className="col-1 number" onClick={this.props.onClick}>
            1
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            2
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            3
          </button>
          <button className="col-1 operation" onClick={this.props.onClick}>
            +
          </button>
        </div>
        <div className="keypad-row">
          <button className="col-2 number" onClick={this.props.onClick}>
            0
          </button>
          <button className="col-1 number" onClick={this.props.onClick}>
            .
          </button>
          <button className="col-1 operation" onClick={this.props.onClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default KeyPad;
