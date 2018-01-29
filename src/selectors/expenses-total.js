// Returns the sum of an array of expenses object amount
export default (expenses) => {
  const amounts = expenses.map((expense) => expense.amount);
  return amounts.reduce((sum, value) => sum + value, 0);
}