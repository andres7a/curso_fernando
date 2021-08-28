import {Fragment, useState} from 'react';
import './Counter.css';

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20
    });

    const {counter1, counter2} = counter;

    const onClick = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1,
            counter2: counter2 + 1
        });
    };

    return (
        <Fragment>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr></hr>
            <button
                className="btn btn-primary"
                onClick={onClick}
            >
                +1
            </button>
        </Fragment>
    )
};

export default CounterApp;