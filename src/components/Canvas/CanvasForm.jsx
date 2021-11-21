import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './CanvasForm.css'

const CanvasForm = () => {
    const history = useHistory();
    const [canvasInfo, setCanvasInfo] = useState({});
    const handleChange = (event) => {
        let { id, value } = event.target;
        setCanvasInfo((prevCanvas) => {
            return {
                ...prevCanvas,
                [id]: value,
            };
        });
    };
    const token = window.localStorage.getItem("token");
    const postData = () => {
        return fetch(`${process.env.REACT_APP_API_URL}canvas/`,
            {
                method: "post",
                headers: { "Content-Type": "application/json", "Authorization": `Token ${token}` },
                body: JSON.stringify(canvasInfo),
            }).then(i => i.json());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.localStorage.getItem('token')) {
            postData()
                .then((response) => {
                    console.log(response)
                    console.log('------response from my API --------')
                    history.push("/");
                })
        }
    };
    return (
        <div className="pagewrapper">
            <div className="wrapper">
                <div className="title-text">
                    <div className="title">Create a new Canvas</div>
                </div>
                <div className="form-container">
                    <div className="form-inner">
                        <form form onSubmit={handleSubmit} className="login">
                            <div className="field">

                                <input type="text" id="title" placeholder="Canvas title" onChange={handleChange} required />
                            </div>
                            <div className="field">
                                <textarea id="description" placeholder="Canvas Description" onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <label>Public?</label>
                                <input className="field" type="checkbox" id="is_public" onChange={handleChange} />
                            </div>
                            <div>
                                <input className="field" type="text" id="team" placeholder="Team" onChange={handleChange} />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Create new Canvas" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CanvasForm;