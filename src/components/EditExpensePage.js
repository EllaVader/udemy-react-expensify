import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const EditExpensePage = (props) => {
  // props.match.params -- this is a special property on the Route object called "match" when we user Route.
  // id was passed in as one of the parameters for this page Route path="/edit/:id"  we can access
  // it via the props.match
  return (
    <div>
      <ExpenseForm
        expense={props.expense} 
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          // using browser routing go to dashboard page. we have access to this history prop and it has a push method on it to go to a different page.
          props.history.push('/');
          console.log('updated', expense);
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
  </div>
  );
}

const mapStateToProps = (state, props) => {
  // return an object that contains the things we want to access from the store
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);
