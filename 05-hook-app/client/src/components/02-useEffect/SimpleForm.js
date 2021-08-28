import {Fragment, useEffect, useState} from 'react';
import Message from './Message';
import './effeccts.css';

const SimpleForm = () => {

    const [formState, setFormstate] = useState({
		name: '',
		email: ''
	});

	const {name, email} = formState;

	useEffect(() => {
		console.log(email);
	}, [email]);

    const handleInputChange = (e) => {
        setFormstate({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Fragment>
            <h1>UseEffect</h1>
            <hr></hr>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>
            {(name === '123') && <Message></Message>}
        </Fragment>
    )
};

export default SimpleForm;