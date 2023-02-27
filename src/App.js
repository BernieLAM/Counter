import React, { Component } from "react"; // type "imrc" and "cc" will get line 1 & 3

class App extends Component {
  state = { counter: 0 };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }; // use fat arrow write function

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }; // use fat arrow write function

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <p>{this.state.counter}</p>
      </div>
      // onClick is a event = event listener
    );
  }
}

export default App;
