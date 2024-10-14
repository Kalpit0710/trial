import React, { useState } from 'react';

function Fun() {
    const [count, setCounter] = useState(0);

    function updateCount() {
        setCounter(count + 1);
    }

    return (
        <>
            <h1>Button Clicked {count} times</h1>
            <button onClick={updateCount}>Click</button>
        </>
    );
}

export default Fun;
