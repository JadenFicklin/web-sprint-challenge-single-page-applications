import React, { Component } from "react";

class Finish extends Component {
  render() {
    return (
      <div class="finish-column">
        <div class="finish-whole">
          <div class="finish-background">Congrats! Pizza is on its way!</div>
          <div class="finish-gif-container">
            Enjoy this Dog with Pizza
            <img
              class="dog"
              src="https://www.rover.com/blog/wp-content/uploads/2017/03/800_9397.jpg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Finish;
