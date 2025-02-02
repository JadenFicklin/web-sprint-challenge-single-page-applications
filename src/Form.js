import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import pizza from "./assets/Pizza.jpg";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "medium",

      ingredientsLocked: false,
      chosenIngredients: [],
    };

    this.setCounter = this.setCounter.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    if (this.state.username.length > 2) {
      alert(
        `NAME: ${this.state.username} SPECIAL INSTRUCTIONS: ${
          this.state.comments
        } SIZE: ${
          this.state.topic
        } TOPPINGS: ${this.state.chosenIngredients.join(", ")}`
      );
    } else {
      alert(
        `NAME: ${this.state.username} SPECIAL INSTRUCTIONS: ${
          this.state.comments
        } SIZE: ${
          this.state.topic
        } TOPPINGS: ${this.state.chosenIngredients.join(", ")}`
      );
      this.props.changePage("finish");
    }
    event.preventDefault();
  };
  // this makes it so the user can only pick 4 of the toppings
  setCounter(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    const newArray = this.state.chosenIngredients;

    if (checked) {
      newArray.push(name);
      this.setState({ chosenIngredients: newArray });
    } else {
      const killIndex = newArray.indexOf(name);
      newArray.splice(killIndex, 1);
      this.setState({ chosenIngredients: newArray });
    }

    this.setState({
      ingredientsLocked: this.state.chosenIngredients.length > 3,
    });
  }
  // the form itself
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div className="top">
          <h2>LAMBDA EATS</h2>
          <nav className="topnav">
            <div className="navbutton">Home</div>
            <div className="navbutton">Help</div>
          </nav>
        </div> */}
        {/* form portion */}
        <div className="outerwhole">
          <div className="whole" id="build-pizza">
            {/* header */}
            <h1>Build Your Own Pizza</h1>
            {/* picture */}
            <img src={pizza} alt="pizza" />
            <h3>Build Your Own Pizza</h3>
            <div>
              {/* size of pizza */}
              <div className="sizeofpizza">
                <label>Choice of Size </label>
                <select
                  value={this.state.topic}
                  onChange={this.handleTopicChange}
                >
                  {" "}
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              {/* checkboxes */}
              <div className="checkboxes">
                <Counter
                  ingredientsLocked={this.state.ingredientsLocked}
                  setCounter={this.setCounter}
                />
              </div>
              {/* name */}
              <div className="nameofpizza">
                <label>Name </label>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Enter First Name"
                  onChange={this.handleUsernameChange}
                  minLength={2}
                />
              </div>
              {/* - [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!) */}
            </div>
            {/* comments */}
            <div className="commentsforpizza">
              <label>Special instructions </label>
              <textarea
                value={this.state.comments}
                onChange={this.handleCommentsChange}
              ></textarea>
            </div>
            {/* submit */}
            <button type="submit" className="submitforpizza">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
