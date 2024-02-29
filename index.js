import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//action name constants
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";

const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    //console.log(action);
    return { amount: state.amount + 1 };
  }
  if (action.type === dec) {
    return { amount: state.amount - 1 };
  }
  if (action.type === incByAmount) {
    return { amount: state.amount + action.payload };
  }
  return state;
}

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

//Action creators
function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}
setInterval(() => {
  store.dispatch(incrementByAmount(4));
}, 3000);
