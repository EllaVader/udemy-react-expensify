import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  // create 3 spies, one for each prop this will be passed into this component
  editExpense = jest.fn();
  removeExpense = jest.fn();
  // history is an object which has a push prop - assign that to a spy
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense} 
    history={history} 
    removeExpense={removeExpense} 
    expense={expenses[2]}
    />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  // call onSubmit
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
  // call onClick on the button
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});
