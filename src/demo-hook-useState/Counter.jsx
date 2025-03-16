import React, { useState } from 'react';
import style from './Counter.module.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className={style['counter-container']}>
            <p className={style['counter-display']}>{count}</p>
            <button className={style['counter-button']} onClick={increment}>Increment</button>
            <button className={style['counter-button']} onClick={decrement}>Decrement</button>
            <button className={style['counter-button']} onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;