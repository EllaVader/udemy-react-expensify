import React from 'react';

export default class ExpenseForm extends React.Component {
  // use local component state to track changes to user inputs.
  // only when the user submits the form will we send them via redux
  state = {
    description: '',
    note: '',
    amount: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    //only allow for numbers followed by an optional . followed by 2 numbers
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  }

  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
          <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
          <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)"></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}