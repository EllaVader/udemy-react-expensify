import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';import 'react-dates/lib/css/_datepicker.css';


//const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  // use local component state to track changes to user inputs.
  // only when the user submits the form will we send them via redux
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
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

  onDateChanged = (createdAt) => {
    this.setState(() => ({createdAt}));
  }

  onFocusChanged = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
  }

  render(){
    return (
      <div>
        <form>
          <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
          <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChanged}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChanged}
            numberOfMonths={1}
            isOutsideRange={() => false }
          />
          <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)"></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}