import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">React Restuarant</h1>
          <p className="lead">The Greatest Restaurant to Never Exist</p>
          <img
            width="1000"
            height="300"
            src="https://www.wien.info/media/images/41993-das-loft-sofitel-19to1.jpeg"
          />
        </div>
      </div>
    );
  }
}

export default Header;
