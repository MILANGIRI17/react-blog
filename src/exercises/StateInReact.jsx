import { useState } from "react";

export default function StateInReact() {
    const [count,setCount] = useState(1);
    return (
        <>
        <h2>State is React JS</h2> 
        <h3>{count}</h3>
        <button onClick={()=>setCount(count + 1)}>Click Me to Increment</button>
        </>
    );
}