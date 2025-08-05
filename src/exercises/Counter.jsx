import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0);
    const [rCount, setRCount] = useState(100);

    function handleCount(increaseCount) {
        if (increaseCount) setCount(count + 1);
        else setRCount(rCount - 1); 
    }

    return (
        <>
            <h3>Counter: {count}</h3>
            <button onClick={() => handleCount(true)}>Update Count</button>
            <h3>Reverse Counter: {rCount}</h3>
            <button onClick={() => handleCount(false)}>Reverse Count</button>
        </>
    );
}