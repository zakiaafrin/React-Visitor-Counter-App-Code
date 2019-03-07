import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    // console.log("Increment Clicked", this);
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button> */}

        {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// import React, { Component } from 'react';

// class Counter extends Component {
//    state = {
//        count: 0,
//        tags: ["tag1", "tag2", "tag3"]
//    };

// renderTags(){
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//     return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
// }

//    render() {
//        return (
//            <div>
//                {this.state.tags.length === 0 && "Please create a new tag!"}
//                {this.renderTags()}
//            </div>
//        );
//    }
// }

// export default Counter;
