import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//  ACTION GENERATORS:
// 1. ADD_EXPENSE
// remember: Action generators take in a function that is called when the dispatch is 
// made to set the values of the action object.
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    // use the uuid library to generate a unique id 'yarn add uuid'
    // using the JSON shorthand to set the other properties
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// 2. REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// 3. EDIT_EXPENSE
// 4. SET_TEXT_FILTER
// 5. SORT_BY_DATE
// 6. SORT_BY_AMOUNT
// 7. SET_START_DATE
// 8. SET_END_DATE

// REDUCERS:
// 1. Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    default:
      return state;
  }
};

// 2. Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => 
  // return the state of our store.
  console.log(store.getState())
);

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({id: expense1.expense.id}));


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