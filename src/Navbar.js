import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              React Restuarant <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#menu">
              Menu
            </a>
            <a className="nav-item nav-link" href="#reservation">
              Reservation
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
