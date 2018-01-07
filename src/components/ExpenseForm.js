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
    calendarFocused: false,
    error: '',
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
    //only allow for numbers followed by an optional . followed by 2 numbers.  Also allow them to clear it out
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  }

  onDateChanged = (createdAt) => {
    //default date is today, but don't allow them to send in no date (i.e. clear out the date)
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChanged = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
  }

  onSubmit = (e) => {
    // don't do the full page refresh.
    e.preventDefault();

    // required fields are description, amount and date, and we already enforce valid amount format and date will be set onSubmit.
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({ error: 'Please provide description and amount'}))
    } else {
      // clear the error
      this.setState(() => ({ error: ''}))
      // since this form is going to be used on add and edit expense, it will have different onSubmit logic.
      // so we don't want to dispatch it in here, we will dispatch it at the parent level
     this.props.onSubmit({
       description: this.state.description,
       amount: parseFloat(this.state.amount, 10) * 100,
       createdAt: this.state.createdAt.valueOf(),
       note: this.state.note
     })
    }

  };

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
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