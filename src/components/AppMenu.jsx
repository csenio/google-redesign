import React, { Component } from "react";

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        onClick={e =>
          e.target.className === "appmenu__container" &&
          this.props.closeAppMenu()
        }
        className="appmenu__container"
      >
        <div className="appmenu">
          <a target="blank" href="https://news.google.com/">
            <div>
              <img
                alt="news"
                src="https://img.icons8.com/color/480/000000/google-news.png"
              />
            </div>
          </a>
          <a target="google" href="./">
            <div>
              <img
                alt="google"
                src="https://img.icons8.com/color/480/000000/google-logo.png"
              />
            </div>
          </a>
          <a target="blank" href="https://maps.google.com/">
            <div>
              <img
                alt="maps"
                src="https://img.icons8.com/color/480/000000/google-maps.png"
              />
            </div>
          </a>
          <a target="blank" href="https://www.youtube.com/">
            <div>
              <img
                alt="youtube"
                src="https://img.icons8.com/color/480/000000/youtube-play.png"
              />
            </div>
          </a>
          <a target="blank" href="https://play.google.com">
            <div>
              <img
                alt="playstore"
                src="https://img.icons8.com/color/480/000000/google-play.png"
              />
            </div>
          </a>
          <a target="blank" href="https://mail.google.com">
            <div>
              <img
                alt="mail"
                src="https://img.icons8.com/color/480/000000/gmail.png"
              />
            </div>
          </a>
          <a target="blank" href="https://docs.google.com">
            <div>
              <img
                alt="docs"
                src="https://img.icons8.com/color/480/000000/google-docs.png"
              />
            </div>
          </a>
          <a target="blank" href="https://drive.google.com">
            <div>
              <img
                alt="drive"
                src="https://img.icons8.com/color/480/000000/google-drive.png"
              />
            </div>
          </a>
          <a target="blank" href="https://plus.google.com">
            <div>
              <img
                alt="plus"
                src="https://img.icons8.com/color/480/000000/google-plus.png"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default AppMenu;
