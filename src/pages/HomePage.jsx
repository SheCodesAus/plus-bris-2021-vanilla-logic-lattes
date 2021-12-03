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

    const [searchTerm,setSearchTerm] = useState('')

    return (
        canvasList.length ?
            <div className="page-container">
                <div className="home-header">
                    <div className="canvas-container">
                        <Link className="button create-newcanvas" to="/createcanvas">Create a new Canvas</Link>
                        <p className="find-canvas-text">Find your canvases: </p>
                        <input id="canvas-search" type="text" placeholder="Search by Team Name..." onChange={event => {setSearchTerm(event.target.value)}}/>
                    </div>
                </div>
                <div id="canvas-list">
                    {
                        canvasList.filter((projectData)=> {
                            if (searchTerm == "") {
                                return projectData
                            } else if (projectData.team.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return projectData
                            }
                        }).map((projectData, key) => {

                            return (
                                <CanvasCard key={key} projectData={projectData} isEditMode={true} />

                            );
                        })
                    }
                </div>
            </div>
            : <div className="page-container">
                <h2 className="page-title--home">You Don't have any canvases to display yet</h2>
                <Link className="button create-newcanvas" style={{ width: 'fit-content' }} to="/createcanvas">Create your first Canvas</Link>

            </div >);
}

    

export default Home