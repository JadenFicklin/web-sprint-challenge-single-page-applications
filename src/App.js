import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <h2>LAMBDA EATS</h2>
          <nav className="topnav">
            <a href="Main.js" target="Main.js" className="navbutton">
              Home
            </a>
            <a href="#" target="_blank" className="navbutton">
              Help
            </a>
          </nav>
        </div>
        <Form />
        <Main />
      </div>
    );
  }
}

export default App;
