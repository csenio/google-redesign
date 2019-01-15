import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="nav">
        <ul>
          <li className="navitem settings">
            <i class="fas fa-cog" />
          </li>
          <li className="navitem platforms">
            <div className="icon">
              <img
                src="https://i.imgur.com/TyHNsvL.png"
                onClick={this.props.openAppMenu}
                alt="menu"
              />
            </div>
          </li>
          <li className="navitem profile">
            <img src="https://i.imgur.com/HpWnlwh.png" alt="profile" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
