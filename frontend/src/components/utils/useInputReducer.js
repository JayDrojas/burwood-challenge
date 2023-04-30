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
      "http://127.0.0.1:5000/api/inputs/",
      requestOptions
    );
    const jsonData = await response.json();
    
    dispatch({ type: "REFRESH_TOP_3", payload: jsonData });
  };
  
export const fetchTop3 = async (dispatch) => {
    const response = await fetch("http://127.0.0.1:5000/api/inputs/");
    const jsonData = await response.json();
    
    dispatch({ type: "GET_TOP_3", payload: jsonData });
  };