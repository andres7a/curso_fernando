import {useLayoutEffect, useRef} from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './layout.css';

const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>

            <hr></hr>

            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
                <br></br>
            </blockquote>
            <button className="btn btn-primary" onClick={increment}>SIguiente mensaje</button>
        </div>
    )
};

export default Layout;