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
      <div className="main-container">
        <div className="main-subcontainer-1">
          <UserInputForm dispatch={dispatch} />
        </div>
        <div className="main-subcontainer-2">
          <div className="user-input">
            <h2>Leaderboard</h2>
            <p>Top 3 scores of numbers inputed by the users.</p>
          </div>
          {state.data ? (
            state.data.map((input, idx) => (
              <UserInput key={input._id.$oid} rank={idx + 1} input={input} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
