
// Expenses Reducer - defines how the state will change.  The logic to operate on the action and 
// change the state is this reducer function.  It returns updated state.
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
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