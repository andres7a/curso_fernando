import { memo } from "react";

const ShowIncrement = memo(({increment}) => {

    console.log('Volver a ejecutar');

    const handle = () => {
        increment(5);
    };

    return (
        <button
            className="btn btn-primary"
            onClick={handle}
        >
            Increment
        </button>
    )
})

export default ShowIncrement
