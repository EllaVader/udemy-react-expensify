import { createStore } from 'redux';

// createStore takes a fn as a first argument.  
// argument to this function is the state.  
// There is no constructor function to set up the default, so set you state props with default values.
const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());