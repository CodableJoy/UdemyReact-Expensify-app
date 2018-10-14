import { createStore } from 'redux';

//Action generators - functions that return action objects

//defaulting incrementBy and decrementBy to empty object because not required to be passed in 
const incrementCount = ( {incrementBy = 1} = {} ) =>  ({
        type: 'INCREMENT',
        // incrementBy: incrementBy
        incrementBy
    });

const decrementCount = ( {decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET',
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
         return {
                count: state.count + action.incrementBy
        };
        case 'DECREMENT':
         return {
                count: state.count - action.decrementBy
        };
        case 'RESET':
         return {
             count: 0
        };
        case 'SET' :
         return{
            count: action.count
        }
        default: 
            return state;
    }
};

const store = createStore(countReducer);

//store.subscribe is a function that accepts function when state changes 
const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});

//actions are an object that gets sent to the store

//store.dispatch passes action to change redux store state 
//redux then handle dispatch calls with the functions passed to createStore 

//in addition to type property, can toss additional actions
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());


// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch({
    type: 'RESET'
});

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10 }));

store.dispatch(setCount({count: 101}));



