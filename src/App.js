import React, { Component } from "react";
import Loader from "./components/Loader";
import "./app.css";
import Nav from "./components/Nav";
import AppMenu from "./components/AppMenu";
import SearchResults from "./components/SearchResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaSelected: false,
      search: "",
      animation: "wave",
      appmenuIsOpen: false
    };
  }

  logotoText = () => {
    this.setState({ animation: "", textareaSelected: false });
  };

  closeAppMenu = () => {
    this.setState({ appmenuIsOpen: false });
  };
  openAppMenu = () => {
    this.setState({ appmenuIsOpen: true });
  };

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
    this.setState({ animation: "loading" });
  };

  render() {
    var {
      state,
      handleInputChange,
      handleblur,
      handlefocus,
      search,
      closeAppMenu,
      openAppMenu,
      logotoText
    } = this;
    return (
      <div className="App">
        {state.appmenuIsOpen && (
          <AppMenu closeAppMenu={closeAppMenu} openAppMenu={openAppMenu} />
        )}
        <Nav openAppMenu={openAppMenu} />
        <div className={`midsection ${state.search}`}>
          <div className="midsection__title">
            <Title search={this.state.search} hidden={state.textareaSelected} />
            <Loader
              animation={state.animation}
              hidden={!state.textareaSelected}
            />
          </div>
          <input
            onKeyDown={e => {
              if (e.key === "Enter") {
                this.search();
              }
            }}
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
        {this.state.search === "searching" && (
          <SearchResults logotoText={logotoText} query={state.query} />
        )}
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
      <h1 className={`title ${this.props.search} hidden--${this.props.hidden}`}>
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
