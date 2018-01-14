import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

// we will connect this component to the store so it can add a new expense.
export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    //props.dispatch(addExpense(expense));
    // using browser routing go to dashboard page
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// takes dispatch as an argument
const mapDispatchToProps = (dispatch) => ({
  // returns an object where you define various props.
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);