import { createStore } from 'redux';

// createStore takes a fn as a first argument.  
// 1st argument to this function is the state, 2nd argument is the action being performed on the state
// There is no constructor function to set up the default, so set you state props with default values.
const store = createStore((state = { count: 0 }, action) => {
  
  switch(action.type){
    case 'INCREMENT' : 
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default: 
      return state;
  }
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());