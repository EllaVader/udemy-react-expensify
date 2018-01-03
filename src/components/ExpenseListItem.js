import React from 'react';

// one way to do it 
// const ExpenseListItem = (props) => (
//   <div>
//     <h3>{props.expense.description}</h3>
//     <p>{props.expense.amount} - {props.expense.createdAt}</p>
//   </div>
// );

// another way to do it - we spread the expenses in the ExpenseList component
// and we are destructuring them here in the argument list.
const ExpenseListItem = ({description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
);


export default ExpenseListItem;