import React from "react";

function CanvasCard({ projectData, isEditMode = false }) {
    return (
        <div className="canvas-card-wrapper">
            <div className="canvas-card">
                <h3 className="canvas-title--card">{projectData.title}</h3>
            </div>
        </div>);
}

export default CanvasCard;
