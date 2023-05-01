import React, { useState } from "react";
import { createOrUpdateInput } from "../utils/useInputReducer";
import fizzBuzz from "../utils/fizzBuzz";
import "./UserInputForm.css"

function UserInputForm({ dispatch }) {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

const handleSubmit = (event) => {
  event.preventDefault();
  if (isNaN(inputValue)) {
    // The input value is not a number
    console.log('here')
    setResult("Please enter a valid number");
    return;
  }
  createOrUpdateInput(dispatch, inputValue);
  const fizzRes = fizzBuzz(parseInt(inputValue));
  setResult(fizzRes);
};

  return (
    <div className="input-form">
      <h2>FizzBuzz</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <h2>{result ? `Result is : ${result}` : "Please Submit a number"}</h2>
        </div>
        <div className="form-item">
          <label>
            Input:
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-item">
          <button disabled={inputValue.length === 0} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserInputForm;
