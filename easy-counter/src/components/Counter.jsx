import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);   //holds the current count
    //count is a piece of state and setCount is a setter/function, created by useState

    const increment = () => setCount(c => c += 1); //c = count
    const decrement = () => setCount(c => c -= 1);
    const reset = () => setCount(0); //reset counter back to 0

    return (
        <>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter