import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//create a stateless functional React component 

export const ExpenseList = (props) => (
    <div>
      <h1> ExpenseList </h1>
      {props.expenses.length}
      {props.expenses.map((expense)=>(
        <ExpenseListItem key={expense.id}{...expense}
        />
        ))
    }
    </div>
);

//<ExpenseListItem {...expense} is the shorthand of doing 
//<ExpenseListItem id=expense.id, description=expense.description and so on> 
//the object spread operator let you copy the properties of an object to another object efficiently

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);



// export default ConnectedExpenseList = connect((state) =>{
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;