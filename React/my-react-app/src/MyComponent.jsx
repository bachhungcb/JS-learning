// update function = A function passsed as an argument to setState() usually
//                  ex. setYear(y => y + 1)
//                  Allow for safe updates based on the previous state
//                  Used with multiple state updates an asynchronous functions
//                  Good practice to use updater functions

import React, {useState} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);

    }

    function reset(){
        setCount(0);
    }

    return(
        <div>
                <p>Count: {count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
        </div>
    )
}   

export default MyComponent