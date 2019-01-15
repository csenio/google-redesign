import React, { Component } from "react";
import Loader from "./components/Loader";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaSelected: false, search: "" };
  }

  handlefocus = () => {
    this.setState({ textareaSelected: true });
  };
  handleblur = e => {
    // console.log("blur", !!e.target.value);
    if (!e.target.value) this.setState({ textareaSelected: false });
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value });
  };

  search = () => {
    this.setState({ search: "searching" });
  };

  render() {
    var { state, handleInputChange, handleblur, handlefocus, search } = this;
    return (
      <div className="App">
        <div className={`midsection ${this.state.search}`}>
          <div className="midsection__title">
            <Title hidden={state.textareaSelected} />
            <Loader animation="wave" hidden={!state.textareaSelected} />
          </div>
          <input
            type="text"
            className="searchbar"
            onFocus={handlefocus}
            onBlur={e => {
              handleblur(e);
            }}
            placeholder="search"
            onChange={e => {
              handleInputChange(e);
            }}
          />
          <button
            className="search__button"
            onClick={() => {
              state.query && search();
            }}
          >
            Search
          </button>
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
