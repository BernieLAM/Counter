import React, { Component } from "react"; // type "imrc" and "cc" will get line 1 & 3
import Header from "./Header";
import CounterDisplay from "./CounterDisplay";

class Counter extends Component {
  state = { counter: 0 };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 100 }); // setState takes object // contain the thing wanna change and new value
  }; // use fat arrow write function

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 100 });
  };

  onReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <button onClick={this.onReset}>Reset</button>

        <CounterDisplay counterValue={this.state.counter} />
      </div>
      // onClick is a event = event listener // <> </> = <div> </div>

      // can write like this but look a bit messy
      //   <button onClick={() => {
      //     this.setState({ counter: this.state.counter - 100 });
      //   };
      // }>Increment</button>
    );
  }
}

export default Counter;
