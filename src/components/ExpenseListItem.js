import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

// one way to do it 
// const ExpenseListItem = (props) => (
//   <div>
//     <h3>{props.expense.description}</h3>
//     <p>{props.expense.amount} - {props.expense.createdAt}</p>
//   </div>
// );

// another way to do it - we spread the expenses in the ExpenseList component
// and we are destructuring them here in the argument list.
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
       dispatch(removeExpense({id}));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);