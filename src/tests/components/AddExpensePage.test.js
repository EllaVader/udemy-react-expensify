import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  // create 2 spies, one for each prop this will be passed into this component
  addExpense = jest.fn();
  // history is an object which has a push prop - assign that to a spy
   history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  // call onSubmit
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});