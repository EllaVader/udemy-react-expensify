import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1234} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary more than one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={1234876} />);
  expect(wrapper).toMatchSnapshot();
});