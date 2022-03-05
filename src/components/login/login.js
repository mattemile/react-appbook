import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from './loginService';

function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState('');
    const [showSuccess, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const changeText = e => {
        let nam = e.target.name;
        if (nam === "username")
            setUsername(e.target.value);
        else setPassword(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
    }

    const login = e => {
        let useLoginService = new LoginService();
        useLoginService.login(username, password, LoginSuccess, LoginError)
    }

    const LoginSuccess = dataResult => {
        setSuccess(true);
        setSuccessMessage('Login effettuato con successo il tuo token è ' + dataResult.token);
        setError(false);
        setErrorMessage('');
        navigate("/Booklist");
    };

    const LoginError = errorData => {
        setSuccess(false);
        setSuccessMessage('');
        setError(true);
        setErrorMessage('Login Fallito per ' + errorData.error);
    };

    const GetSuccessMessage = () => {
        if (showSuccess) {
            return (
                <div style={{ color: 'green' }}>
                    {successMessage}
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }

    const GetErrorMessage = () => {
        if (showError) {
            return (
                <div style={{ color: 'red' }}>
                    {errorMessage}
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }

    return (
        <div style={{ marginTop: "100px", minHeight: "70vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col-6 mr-auto ml-auto">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="username"
                                    onChange={changeText}
                                    value={username}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="password"
                                    onChange={changeText}
                                    value={password}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary pull-right"
                                onClick={login}
                            >
                                Invio
                            </button>
                            <GetSuccessMessage />
                            <GetErrorMessage />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login