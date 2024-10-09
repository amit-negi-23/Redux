const redux = require("redux");

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "ADD":
      return { count: state.count + action.payload.num };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

const countSubscriber = () => {
  let state = store.getState();
  console.log(state);
};

store.subscribe(countSubscriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", payload: { num: 20 } });
