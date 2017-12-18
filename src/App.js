import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Reservation from "./Reservation";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Reservation />
      </div>
    );
  }
}

export default App;
