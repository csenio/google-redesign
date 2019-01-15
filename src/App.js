import React, { Component } from "react";
import Loader from "./components/Loader";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaSelected: false
    };
  }

  handlefocus = () => {
    this.setState({ textareaSelected: true });
  };
  handleblur = () => {
    this.setState({ textareaSelected: false });
  };

  render() {
    return (
      <div className="App">
        <div className="midsection">
          <div className="midsection__title">
            <Title hidden={this.state.textareaSelected} />
            <Loader animation="wave" hidden={!this.state.textareaSelected} />
          </div>
          <input
            type="text"
            className="searchbar"
            onFocus={this.handlefocus}
            onBlur={this.handleblur}
            placeholder="search"
          />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1 className={`title hidden--${this.props.hidden}`}>
        <span className="cblue">G</span>
        <span className="cred">o</span>
        <span className="cyellow">o</span>
        <span className="cblue">g</span>
        <span className="cgreen">l</span>
        <span className="cred">e</span>
      </h1>
    );
  }
}

export default App;
