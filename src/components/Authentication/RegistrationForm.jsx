import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './LoginForm.css'
import { api } from '../../api/api'

const RegistrationForm = () => {

    // const history = useHistory();
    // const [userInfo, setUser] = useState({});
    // const handleChange = (event) => {
    //     let { id, value } = event.target;
    //     setUser((prevProject) => {
    //         return {
    //             ...prevProject,
    //             [id]: value,
    //         };
    //     });
    // };
    // const postData = () => {
    //     return fetch(`${process.env.REACT_APP_API_URL}users/`,
    //         {
    //             method: "post",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(userInfo),
    //         }).then(i => i.json());
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     postData()
    //         .then((response) => {
    //             history.push("/");
    //         })
    // };
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({});
    const handleChange = (event) => {
        let { id, value } = event.target;
        setUserInfo((prevProject) => {
            return {
                ...prevProject,
                [id]: value,
            };
        });
    };
    console.log(api)
    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}users/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            }).then(i => i.json());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
            .then((response) => {
                console.log('new user created')
                history.push("/");
            })
    };

    return (
        <div className="page-login">
            <div className="container-login">
                <form onSubmit={handleSubmit} className="form-login">
                    <p className=" title-login">Create an account</p>
                    <div className="form-item-login">
                        <label className="label-login">Email:</label>
                        <input className="field-login" type="text" id="email" placeholder="Enter your email address" onChange={handleChange} />
                    </div>
                    <div className="form-item-login">
                        <label className="label-login" >Username:</label>
                        <input className="field-login" type="text" id="username" placeholder="Enter your username" onChange={handleChange} />
                    </div>
                    <div className="form-item-login">
                        <label className="label-login" >Password:</label>
                        <input className="field-login" type="password" id="password" placeholder="Enter your password" onChange={handleChange} />
                    </div>
                    <div className="form-item-register">
                        <input className="button-register " type="submit" value="Create Account" onClick={handleSubmit}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm