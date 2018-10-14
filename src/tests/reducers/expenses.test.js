import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expenseToAdd = {
        id: '4',
        description: 'nailpolish',
        note: '',
        amount: 1000,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseToAdd
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expenseToAdd
    ]);
});

test('should edit expense', () => {
    const expenseToEdit = {
        description: 'nailpolish',
        amount: 2000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: expenseToEdit
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(
        [{...expenses[0], ...expenseToEdit}, expenses[1], expenses[2]]
    );
});

test('should not edit expense', () => {
    const expenseToEdit = {
        description: 'nailpolish'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: expenseToEdit
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});



