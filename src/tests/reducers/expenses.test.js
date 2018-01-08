import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Cable',
    note: '',
    amount: 30000,
    createdAt: 2000
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'Rent updated';
  const action = {
    type: 'EDIT_EXPENSE',
    id: 2,
    updates: {
      description
    }
  }

  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test('should not edit an expense if expense is not found', () => {
  const description = 'Rent updated';
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toMatchObject(expenses);
});

