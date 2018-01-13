import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// our regular unconnected component
// pass in the props from the state that we connected to in the connect method below.
export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    { 
      props.expenses.length === 0 ? ( <p>No expenses </p> ): (props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })) 
    }
  </div>
);

// map the state object to component props.
// as the store change, this will automatically re-run refreshing the component
const mapStateToProps = (state) => {
  // return an object that contains the things we want to access from the store.
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

// create a higher order component that connects our component to the store.
// returns a function, pass the component into the function
// in the connect fn the argument is info to what we want to connect
// lets us determine what info from the store we want our component to be able to access
export default connect(mapStateToProps)(ExpenseList);  