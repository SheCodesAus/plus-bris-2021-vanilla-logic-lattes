import React from "react";

import { Link } from "react-router-dom";
import './CanvasCard.css'

function CanvasCard({ projectData, isEditMode = false }) {

    return (
        <div className="canvas-card">
            <Link to={`/canvas/${projectData.id}`}>
                <img src={projectData.image} alt="canvas " />
                <div className="card-inner-container">
                    <h3 className="canvas-title--card">{projectData.title}</h3>
                    <p className="canvas-team--card">{projectData.team}</p>
                </div>
            </Link>
        </div>
    );
}

export default CanvasCard;
