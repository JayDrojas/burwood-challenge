import "./App.css";
import React, { useEffect, useReducer } from "react";
import UserInput from "./components/UserInput";
import UserInputForm from "./components/UserInputForm";
import { fetchTop3, reducer } from "./components/utils/useInputReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });

  useEffect(() => {
    fetchTop3(dispatch);
  }, []);

  return (
    <div className="App">
      <UserInputForm dispatch={dispatch} />
      {state.data ? (
        state.data.map((input) => (
          <UserInput key={input._id.$oid} input={input} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
