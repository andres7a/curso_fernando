import { memo } from "react";

const Small = memo(({value}) => {

    console.log('Llamado desde Small')

    return (
        <small>
            {value}
        </small>
    )
});

export default Small;