import "./App.css";
import React, { useEffect, useState } from "react";
import UserInput from "./components/UserInput";
import UserInputForm from "./components/UserInputForm";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchInputs() {
      let response = await fetch("http://127.0.0.1:8000/api/inputs/");
      const jsonData = await response.json();

      if (jsonData) setData(jsonData);
    }
    fetchInputs();
  }, []);

  return (
    <div className="App">
      <UserInputForm />
      {data ? (
        data.map((input) => <UserInput key={input._id.$oid} input={input} />)
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
