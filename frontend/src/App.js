import "./App.css";
import React, { useEffect, useReducer } from "react";
import UserInput from "./components/UserInput";
import UserInputForm from "./components/UserInputForm";

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_TOP_3":
      return { ...state, data: action.payload };
    case "REFRESH_TOP_3":
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};

export const createOrUpdateInput = async (dispatch, inputValue) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_input: inputValue }),
  };

  const response = await fetch(
    "http://127.0.0.1:8000/api/inputs/",
    requestOptions
  );
  const jsonData = await response.json();
  console.log(jsonData)
  dispatch({ type: "REFRESH_TOP_3", payload: jsonData });
};

const fetchTop3 = async (dispatch) => {
  const response = await fetch("http://127.0.0.1:8000/api/inputs/");
  const jsonData = await response.json();
  console.log(jsonData)
  dispatch({ type: "GET_TOP_3", payload: jsonData });
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });

  useEffect(() => {
    fetchTop3(dispatch);
  }, []);

  // console.log(state.data);

  return (
    <div className="App">
      <UserInputForm />
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
