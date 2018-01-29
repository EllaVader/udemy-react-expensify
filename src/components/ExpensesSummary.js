import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h2>
        Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const expensesTotal = selectExpensesTotal(visibleExpenses);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal
  }
}

export default connect(mapStateToProps)(ExpensesSummary); ;
