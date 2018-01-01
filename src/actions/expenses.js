import uuid from 'uuid';

// ACTION GENERATORS:

// ADD_EXPENSE
// remember: Action generators take in a function that is called when the dispatch is 
// made to set the values of the action object.
export const addExpense = (
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

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});