import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './LoginForm.css'
import { api } from '../../api'

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
                history.push("/login");
            })
    };
    return (
        <div className="pagewrapper">
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">Signup Form</div>
                </div>
                <div className="form-container">
                    <div class="form-inner">
                        <form onSubmit={handleSubmit} className="form-login">
                            <div className="field">
                                <input type="email" placeholder="Email" id="email" required onChange={handleChange} />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Username" id="username" required onChange={handleChange} />
                            </div>
                            <div className="field">
                                <input type="password" id="password" placeholder="Password" required onChange={handleChange} />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);

}

export default RegistrationForm