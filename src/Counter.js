// I made this component for the checkboxes

import React, { Component } from "react";

export class counter extends Component {
  render() {
    const { ingredientsLocked, setCounter } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          name="pepperoni"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="pepperoni"> pepperoni </label>
        <input
          type="checkbox"
          name="sausage"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="sausage"> sausage </label>
        <input
          type="checkbox"
          name="canadian"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="canadian"> canadian </label>
        <input
          type="checkbox"
          name="chicken"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="chicken"> chicken </label>
        <input
          type="checkbox"
          name="onions"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="onions"> onions </label>
        <input
          type="checkbox"
          name="olives"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="olives"> olives </label>
        <input
          type="checkbox"
          name="pineapple"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="pineapple"> pineapple </label>
        <input
          type="checkbox"
          name="olives"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="olives"> olives </label>
        <input
          type="checkbox"
          name="tomatoes"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="tomatoes"> tomatoes </label>
        <input
          type="checkbox"
          name="peppers"
          disabled={ingredientsLocked}
          onChange={(e) => setCounter(e)}
        />
        <label for="peppers"> peppers </label>
      </div>
    );
  }
}

export default counter;
