import React, { Component } from "react";

class CounterDisplay extends Component {
  state = {};
  render() {
    return <p>{this.props.counterValue}</p>;
  }
}

export default CounterDisplay;
