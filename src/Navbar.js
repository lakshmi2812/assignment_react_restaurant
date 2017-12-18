import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return ( 
    <nav className="navbar">
      <a className="navbar-brand" href="#">React Restaurant</a>
      <li className="nav-item active">
        <a className="nav-link" href="#menu">Menu <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#reservation">Reservation <span className="sr-only">(current)</span></a>
      </li>
    </nav>);
  }
}

export default Navbar;