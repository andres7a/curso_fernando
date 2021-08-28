import {useRef} from 'react';
import '../effeccts.css';

const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(inputRef)

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            ></input>
            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
};

export default FocusScreen;