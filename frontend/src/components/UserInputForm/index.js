import React, { useState, useReducer } from "react";
import { createOrUpdateInput } from "../../App";
import { reducer } from "../../App";

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

function UserInputForm() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });
  const [result, setResult] = useState('');
  // create a state variable to store the user input
  const [inputValue, setInputValue] = useState("");

  // handle the user input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle the submission logic here
    createOrUpdateInput(dispatch, inputValue);
    const fizzRes = fizzBuzz(parseInt(inputValue))
    setResult(fizzRes)
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
