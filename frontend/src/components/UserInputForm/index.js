import React, { useState } from "react";
import { createOrUpdateInput } from "../utils/useInputReducer";

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

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
