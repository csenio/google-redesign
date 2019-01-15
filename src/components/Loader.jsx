import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`loader__container hidden--${this.props.hidden} ${
          this.props.animation
        }`}
      >
        <span className="dot blue" />
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
    );
  }
}

export default Loader;
