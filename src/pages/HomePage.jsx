import React, { useState, useEffect } from 'react'
//import { api } from "../api";

import { Link } from "react-router-dom";
import CanvasCard from '../components/Canvas/CanvasCard';
import './style/canvasList.css'

const Home = () => {
    const [canvasList, setCanvasList] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}canvas/`)
            .then((results) => { return results.json(); })
            .then((data) => { setCanvasList(data); });
    }, []);

    return (
        canvasList.length ?
            <div className="page-container">
                <div>
                    <Link to="/createcanvas">Create a new Canvas</Link>
                    <h2 className="">Find your canvases: </h2>
                </div>
                <div id="project-list">
                    {
                        canvasList.map((projectData, key) => {
                            return (
                                <CanvasCard key={key} projectData={projectData} isEditMode={true} />
                            );
                        })
                    }
                </div>
            </div>
            : <div className="page-container">
                <h3 className="page-title">You Don't have any canvas to display 😞</h3>
                <Link to="/createcanvas">Create your first Canvas</Link>

            </div>);
}

export default Home