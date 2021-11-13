import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './LoginForm.css'

const LoginForm = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState(false)

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(credentials),
            }).then(i => i.json());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData()
                .then((response) => {
                    if (response.token) {
                        setError(false)
                        window.localStorage.setItem("token", response.token);
                        window.location = `${window.location.origin}/`
                        history.push("/");
                    } else {

                        setError(true)
                    }
                })
        }
        else {
            setError(true)
        }
    };

    return (
        <div className="login-page">

            <p className="">Login to your account</p>
            <form onSubmit={handleSubmit} className="form-login">
                <div>
                    <label className="label-login" for="username">Username:</label>
                    <input className="form-input-login" type="text" id="username" placeholder="Enter your username" onChange={handleChange} />
                </div>
                <div>
                    <label className="label-login" for="password">Password:</label>
                    <input className="form-input-login" type="password" id="password" placeholder="Password" onChange={handleChange} />
                </div>
                {
                    error && <div style={{ color: `red`, textAlign: `center`, marginBottom: `1em` }}>Wrong username/password try again.</div>
                }

                <input type="submit" className="button-login" onClick={handleSubmit} value="Login"></input>
            </form>
        </div >

    )
}

export default LoginForm;