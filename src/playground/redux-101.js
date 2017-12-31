import { createStore } from 'redux';

// Action generators - functions that return action objects
// destructure the object and set default to 1 if not set.
// build the action object by using this method.
const incrementCount = ({ incrementBy = 1} = {}) => ({
  // default the payload to an empty object.
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// createStore takes a fn as a first argument.  
// 1st argument to this function is the state, 2nd argument is the action being performed on the state.
// The action argument is passed in when store.dispatch is called, it passes in the action to dispatch.
// this implictly calls createStore with the Action as the 2nd argument.
// There is no constructor function to set up the default, so set you state props with default values.
// This method returns the updated store object to be used in your application.
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT' : 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET' : {
      return { 
        count: action.count 
      }
    };
    case 'RESET':
      return {
       count: 0
      };
    default: 
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 100}));