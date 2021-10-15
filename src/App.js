import React, { Component } from "react";
import "./App.css";
import Finish from "./Finish";
import Form from "./Form";
import Main from "./Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: "main",
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage = (page) => {
    this.setState({ selectedPage: page });
  };

  render() {
    return (
      <div className="App">
        <div className="top">
          <h2>LAMBDA EATS</h2>
          <nav className="topnav">
            <a className="navbutton" onClick={() => this.changePage("main")}>
              Home
            </a>
            <a className="navbutton">Help</a>
          </nav>
        </div>
        {this.state.selectedPage === "main" && (
          <Main changePage={this.changePage} />
        )}
        {this.state.selectedPage === "form" && (
          <Form changePage={this.changePage} />
        )}
        {this.state.selectedPage === "finish" && (
          <Finish changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default App;
