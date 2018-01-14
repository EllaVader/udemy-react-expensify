import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
  // create 2 spies, one for each prop this will be passed into this component
   onSubmit = jest.fn();
  // history is an object which has a push prop - assign that to a spy
   history = { push: jest.fn() }
   wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  // call onSubmit
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});