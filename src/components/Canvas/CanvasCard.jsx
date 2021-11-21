import React from "react";
import donutIcon from '../../images/favicon.ico'
import { Link } from "react-router-dom";

function CanvasCard({ projectData, isEditMode = false }) {
    // const token = window.localStorage.getItem("token");
    // const deleteProject = (id) => {
    //     return fetch(`${process.env.REACT_APP_API_URL}canvas/${id}`, { method: 'delete', "Authorization": `Token ${token}` }).then(r => r.json())
    // }
    return (
        <div className="card-wrapper">
            <div className="project-card">
                <Link to={`/canvas/${projectData.id}`}>
                    <h3 className="project-title--card"><img style={{ width: '25px' }} src={donutIcon} alt="list decoration" />{projectData.title}</h3>
                </Link>
            </div>

        </div>);
}

export default CanvasCard;
