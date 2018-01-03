import React from 'react';
import { connect } from 'react-redux';

// our regular unconnected component
// pass in the props from the state that we connected to in the connect method below.
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    { props.filters.text}
    { props.expenses.length }
  </div>
);

// map the state object to component props.
const mapStateToProps = (state) => {
  // return an object that contains the things we want to access from the store.
  return {
    expenses: state.expenses,
    filters: state.filters
  }
};

// create a higher order component that connects our component to the store.
// returns a function, pass the component into the function
// in the connect fn the argument is info to what we want to connect
// lets us determine what info from the store we want our component to be able to access
export default connect(mapStateToProps)(ExpenseList);  