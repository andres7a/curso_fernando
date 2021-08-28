import { useState } from 'react';
import Small from './Small';
import useCounter from '../../hooks/useCounter';
import '../effeccts.css';

const Memorize = () => {

    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true);

    const handle = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1>Counter: <Small value={counter}></Small></h1>
            <hr></hr>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            {/* <br></br>
            <br></br> */}
            <button
                className="btn btn-outline-primary ml-20"
                onClick={handle}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
};

export default Memorize;