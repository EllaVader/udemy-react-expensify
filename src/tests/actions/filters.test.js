import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
  // set fixed time of 0 for consistent test runs
  const action = setStartDate(moment(0));
  expect(action).toMatchObject({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
   // set fixed time of 0 for consistent test runs
  const action = setEndDate(moment(0));
  expect(action).toMatchObject({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toMatchObject({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date action object', () => {
  expect(sortByDate()).toMatchObject({ type: 'SORT_BY_DATE' });
});

test('should generate set text filter action object with provided value', () => {
  const text = 'test';
  const action = setTextFilter(text);
  expect(action).toMatchObject({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toMatchObject({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});