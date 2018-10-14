import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup removeexpense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup editexpense action object', () => {
    const action = editExpense('123abc', {description: 'water'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {description: 'water'}
    })
});

test('should setup addexpense action object', () => {
    const expenseData = {
        description: "rent",
        amount: 10900,
        createdAt: 1000, 
        note: 'this was oct rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    const defaultExpense = {
         description: '', 
         note: '', 
         amount: 0, 
         createdAt: 0
    };
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
        ...defaultExpense, 
        id: expect.any(String)
        }
    })
});