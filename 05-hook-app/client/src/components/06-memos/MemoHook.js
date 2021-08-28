import { useState, useMemo } from 'react';
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';
import '../effeccts.css';

const MemoHook = () => {

    const {counter, increment} = useCounter(5000);

    const [show, setShow] = useState(true);

    const handle = () => {
        setShow(!show);
    };

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook: {counter}</h1>
            <hr></hr>
            <p>{memoProcesoPesado}</p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-20"
                onClick={handle}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
};

export default MemoHook;