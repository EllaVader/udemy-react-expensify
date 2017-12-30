import { createStore } from 'redux';

// createStore takes a fn as a first argument.  
// 1st argument to this function is the state, 2nd argument is the action being performed on the state
// There is no constructor function to set up the default, so set you state props with default values.
const store = createStore((state = { count: 0 }, action) => {
  
  switch(action.type){
    case 'INCREMENT' : 
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
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

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});