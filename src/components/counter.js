import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Increment The Counter Bell
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  // Reset The Counter
  reset() {
    alert("Are you sure you want to reset? ");
    this.setState({
      count: 0
    });
  }

  // Render the Output
  render() {
    return (
      <div>
        <h1 className="Headline">Hit Counter To Enter Visitor Count</h1>
        <button className="inc" onClick={e => this.increment(e)}>
          Counter
        </button>
        <span>{this.state.count}</span>
        <br />
        <br />
        <button className="reset" onClick={e => this.reset(e)}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
