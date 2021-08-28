import {useEffect} from 'react';
import useForm from '../../hooks/useForm';
import '../effeccts.css';

const FormWithCustomHook = () => {

    const [formValues, setFormValues] = useForm({
		name: '',
		email: '',
        password: ''
	});

	const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Correo cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr></hr>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={setFormValues}
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
                    onChange={setFormValues}
                ></input>
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={setFormValues}
                ></input>
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
        </form>
    )
};

export default FormWithCustomHook;