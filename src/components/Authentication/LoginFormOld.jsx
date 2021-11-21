import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
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
        <div className="page-login">
            <div className="container-login">
                <form onSubmit={handleSubmit} className="form-login">
                    <p className=" title-login">Login to your account</p>
                    <div className="form-item-login">
                        <label className="label-login" >Username:</label>
                        <input className="field-login" type="text" id="username" placeholder="Enter your username" onChange={handleChange} />
                    </div>
                    <div className="form-item-login">
                        <label className="label-login" >Password:</label>
                        <input className="field-login" type="password" id="password" placeholder="Enter your password" onChange={handleChange} />
                    </div>
                    {
                        error && <div style={{ color: `red`, textAlign: `center`, marginBottom: `1em` }}>Wrong username/password. Please try again.</div>
                    }

                    <input className="button-login" type="submit" value="Login" onClick={handleSubmit}></input>
                    <div className="form-item-login">
                        <Link className="link-login" to="/register">Don't have an account? Register now.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm