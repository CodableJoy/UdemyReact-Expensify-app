store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses); 
});

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 10000, createdAt: 150}));
const expenseTwo = store.dispatch(addExpense({description: 'dinner', amount: 1000, createdAt: 170}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 80000}));

//store.dispatch(setTextFilter('dinneR'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

//store.dispatch(sortByDate());

store.dispatch(setStartDate(125));

store.dispatch(setEndDate(200));

const demoState = {
    expenses: [{
        id: 'ccsc',
        description: 'jan rent',
        note: 'last payment',
        amount: 120000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};