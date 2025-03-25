import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        const number = count + 1;
        setCount(number);
    }
    const handleRemove = () => {
        const number = count - 1;
        if (number >= 0) {
            setCount(count -1)
        }
    }
    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleRemove}>click me - </button>
            <button onClick={handleAdd}>Click me +</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Count;