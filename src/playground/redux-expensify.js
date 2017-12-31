import { createStore, combineReducers } from 'redux';

// data we want to track state on
const demoState = {
  expenses: [{
    id: 'abcedf',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// now we can write complex reducers for this complex state.