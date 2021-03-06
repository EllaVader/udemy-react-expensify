import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//  ACTION GENERATORS: - define the action type and pass in the data 
// to use for the to change the state
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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// 4. SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// 5. SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// 6. SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// 7. SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// 8. SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// REDUCERS: - change the state based on the action argument
// the action is the date we will change. 
// 1. Expenses Reducer 
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id){
          // use object spread operator to take the original expense object, and then overlay the desired updates onto it
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

// apply the filter before we display the ones we care about.
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy == 'date'){
      return a.createAt < b.createAt ? 1 : -1
    } if (sortBy == 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({id: expense1.expense.id}));
// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }))

//store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate(999));

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
