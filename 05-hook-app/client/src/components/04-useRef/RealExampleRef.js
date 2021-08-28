import {useState} from 'react';
import MultipleCustomHook from '../03-examples/MultipleCustomHook';
import '../effeccts.css';

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handle = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1>Real Example red</h1>
            <hr></hr>
            {show && <MultipleCustomHook></MultipleCustomHook>}
            <button
                className="btn btn-primary mt-5"
                onClick={handle}
            >Show/Hide</button>
        </div>
    )
};

export default RealExampleRef;