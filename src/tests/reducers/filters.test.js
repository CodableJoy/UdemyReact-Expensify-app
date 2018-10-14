import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state=filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set textFilter', () => {
    const currentState = {
        text: 'water',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const action = {type: 'SET_TEXT', text: 'water'};
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('water');
});

test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };
    const action = {type: 'SET_START_DATE', date: moment().startOf('month')};
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(moment().startOf('month'));
});

    test('should set endDate filter', () => {
        const currentState = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sortBy: 'date'
        };
        const action = {type: 'SET_END_DATE', date: moment().endOf('month')};
        const state = filtersReducer(currentState, action);
        expect(state.endDate).toEqual(moment().endOf('month'));
});