import React, { Component } from "react";

class Searchitem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`search-item ${this.props.loading}`}
        style={{ animation: `moveIn  ${this.props.delay} forwards` }}
      >
        <h2 className="search__item__title">
          <a href={this.props.data[0].link}>{this.props.data[0].title}</a>
        </h2>
        <a href={this.props.data[0].link} className="url">
          {this.props.data[0].displayed_link}
        </a>
        <div className="text">{this.props.data[0].snippet}</div>
      </div>
    );
  }
}

export default Searchitem;
