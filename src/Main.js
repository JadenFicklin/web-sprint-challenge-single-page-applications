import React, { Component } from "react";
import pizza from "./assets/Pizza.jpg";

class Main extends Component {
  render() {
    return (
      <div class="mainspacing">
        <div class="main-whole">
          <div class="imgspacing">
            <img class="mainimg" src={pizza} alt="pizza" />
            <div
              class="main-button"
              onClick={() => this.props.changePage("form")}
            >
              Order pizza here
            </div>
          </div>
          <div class="lower-main">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
          <div class="lower-main">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
