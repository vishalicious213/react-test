import React, { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const Incrementor = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>decrement</button>
        </div>
    )
}

export default Incrementor;

// React Hooks useReducer Tutorial
// https://www.youtube.com/watch?v=wcRawY6aJaw