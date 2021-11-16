import React from 'react';
import './CanvasForm.css'
//import { mockCanvas } from '../../api/mockCanvas.json'

function CanvasForm() {
    const handleSubmit = null;
    const handleChange = null;
    return (
        <div className="">
            <div className="">
                <p className="" align="">Create a new Canvas</p>
                <form onSubmit={handleSubmit} className="">
                    <div className="">
                        <label>Canvas Title</label>
                        <input className="" type="text" id="title" placeholder="Canvas title" onChange={handleChange} />
                        <div>
                            <label>Description</label>
                            <input className="" type="text" id="description" placeholder="What is your canvas about?" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Public?</label>
                            <input className="" type="checkbox" id="public" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Team name:</label>
                            <input className="" type="text" id="team" placeholder="Enter your teams description" onChange={handleChange} />
                        </div>
                        <button className="" align="center" type="submit" >Create your Canvas</button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default CanvasForm;