import React, { useState } from 'react';

function UserInputForm() {
  // create a state variable to store the user input
  const [inputValue, setInputValue] = useState('');

  // handle the user input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle the submission logic here
    console.log(`User input: ${inputValue}`);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input: inputValue })
    };

    async function postInput () {
        const response = await fetch('http://127.0.0.1:8000/api/inputs/', requestOptions)
        const jsonData = await response.json()

        console.log(jsonData)
    }

    postInput()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserInputForm;
