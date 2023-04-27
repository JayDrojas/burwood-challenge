import React, { useState } from "react";
import { createOrUpdateInput } from "../utils/useInputReducer";
import fizzBuzz from "../utils/fizzBuzz";

function UserInputForm({ dispatch }) {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOrUpdateInput(dispatch, inputValue);
    const fizzRes = fizzBuzz(parseInt(inputValue));
    setResult(fizzRes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Answer is : {result}</h1>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserInputForm;
