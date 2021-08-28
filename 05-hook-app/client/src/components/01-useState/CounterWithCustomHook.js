import {Fragment} from 'react';
import useCounter from '../../hooks/useCounter';
import './Counter.css';

const CounterWithCustomHook = () => {

    const factor = 2;
    const {state, increment, decrement, reset} = useCounter(factor);

    return (
        <Fragment>
            <h1>Counter with hook {state}</h1>
            <hr></hr>
            <button
                className="btn btn-primary"
                onClick={() => increment (factor)}
            >+1 </button>
            <button
                className="btn btn-primary"
                onClick={reset}
            > reset </button>
            <button
                className="btn btn-primary"
                onClick={() => decrement (factor)}
            > -1</button>
        </Fragment>
    )
};

export default CounterWithCustomHook;
