import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { api } from "../api"

const CanvasPage = () => {
    const [canvasData, setCanvasData] = useState({ stickyNotes: [] });
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const stickyNotes = await api(`sticky_notes/?canvas_id=${id}`)
            stickyNotes.forEach(async stickyNote => {
                stickyNote._user = null;
                if (stickyNote.owner) {
                    stickyNote._user = await api(`users/${stickyNote.owner}`)
                }
            })
            const canvas = await api(`canvas/${id}`)
            setCanvasData({ ...canvas, stickyNotes: stickyNotes })
        }
        return fetchData()
    }, []);

    return (
        <div className="page-container">
            <div className="canvas">
                <h2 className="page-title">{canvasData.title}</h2>
                {canvasData.stickyNotes.length > 0 ? <ul>{canvasData.stickyNotes.map((stickyNoteData, key) => { return (<li>{stickyNoteData.title} </li>); })}</ul> : <button>+</button>}

            </div>

        </div>
    );
}

export default CanvasPage