import React, { useState } from 'react';

function Oddiy(){

    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(count + 1)
    }

    function decrementCount(){
        setCount(count - 1);
    }

    return(
        <div>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <button onClick={decrementCount}>-</button>
        </div>
    )
}

export default Oddiy;