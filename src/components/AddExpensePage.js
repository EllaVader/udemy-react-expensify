import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

// we will connect this component to the store so it can add a new expense.

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        // using browser routing go to dashboard page
        props.history.push('/');
      }}
      />
  </div>
);

export default connect()(AddExpensePage);