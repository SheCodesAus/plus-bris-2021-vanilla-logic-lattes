import React, { useState, useEffect } from 'react'
//import { api } from "../api";
import mockCanvas from '../api/mockCanvas.json'
import { Link } from "react-router-dom";
import CanvasCard from '../components/Canvas/CanvasCard';
import './style/canvasList.css'

const Home = () => {
    const [canvasList, setCanvasList] = useState([]);
    useEffect(() => {
        // api("canvas/", { annonymous: true })
        //     .then((data) => {
        //         setCanvasList(data);
        //     });
        setCanvasList(mockCanvas);
    }, []);
    return (canvasList.length ?
        <div className="page-container">
            <div>
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
            <Link className="page-title--btn" to="/createCanvas">Click here to create a Canvas now</Link>
        </div>);
}

export default Home