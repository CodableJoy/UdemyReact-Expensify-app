import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('shoud generate set text filter action object', () => {
    const action = setTextFilter('water');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'water'
    });
});

test('should generate set text filter default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});


// export const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT',
//     text
// });

// export const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT',
// });

// export const sortByDate = () => ({
//     type: 'SORT_BY_DATE',
// });