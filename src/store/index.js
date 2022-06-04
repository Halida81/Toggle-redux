


import { createStore } from "redux";

const counterReducer = (prevState = { counter: 0, isToggle: false,  }, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...prevState, // {counter: 0, isLoggedIn: false }
      counter: prevState.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...prevState,
      counter: prevState.counter - 1,
    };
  }

  if (action.type === "TOGGLE") {
    return  {
      ...prevState,
      isToggle:!prevState.isToggle
    }
  }

  return prevState;
};

const store = createStore(counterReducer);

export default store;