import {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevState => prevState + 1)
    }
    return (
        <div>
            <h1 className={classes.green}>{count}</h1>
            <button className={classes.button} onClick={increment}>increase</button>
        </div>
    );
};
