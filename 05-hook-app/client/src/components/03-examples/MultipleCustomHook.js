import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import '../effeccts.css';

const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0];
    // console.log(author, quote)

    return (
        <div>
            <h1>Breaking bad</h1>

            <hr></hr>

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    )
                :
                    (
                        <div>
                            <blockquote className="blockquote text-end">
                                <p className="mb-0">{quote}</p>
                                <br></br>
                                <footer className="blockquote-footer">{author}</footer>
                            </blockquote>
                            <button className="btn btn-primary" onClick={increment}>SIguiente mensaje</button>
                        </div>
                    )
            }
        </div>
    )
};

export default MultipleCustomHook;