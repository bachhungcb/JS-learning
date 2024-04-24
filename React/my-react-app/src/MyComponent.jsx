//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

//              useEffect(function, [dependencies])
// 1.useEffect(() => {})         //Runs after every re-render
// 2.useEffect(() => {}, [])     //Runs on only one mount
// 3.useEffect(() => {}, [value])//Runs on mount + when values changes

//USES
//1. Event Listeners
//2. DOM manipulation
//3. Subcriptions (real-time updates)
//4. Fetching Data from an API
//5. Clean up when a component unmount

import React, {useState, useEffect} from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </>);
}

export default MyComponent