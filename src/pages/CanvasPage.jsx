import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { api } from "../api"
import StickyNotesList from '../components/StickyNotes/StickyNotesList';
import StickyNotesForm from '../components/StickyNotes/StickyNotesForm';

const CanvasPage = () => {
    const [notes, setNotes] = useState([]);
    const [canvasData, setCanvasData] = useState({});
    const { id } = useParams();

    const mapNote = async (note) => {
        note._user = null;
        if (note.owner) {
            note._user = await api(`users/${note.owner}`)
        }
        return note;
    }
    useEffect(() => {
        const fetchData = async () => {
            const stickyNotes = await api(`sticky_notes/?canvas_id=${id}`) || []
            setNotes(await Promise.all(stickyNotes.map(async stickyNote => {
                return mapNote(stickyNote);
            })));
            const canvas = await api(`canvas/${id}`);
            setCanvasData(canvas);
        }
        return fetchData()
    }, []);

    const onRemove = async (noteId) => {
        console.log(noteId);
        await api(`sticky_notes/${noteId}/`, { method: "DELETE" })
        var notIdMatch = note => note.id !== noteId;
        var updatedNotes = notes.filter(notIdMatch);
        setNotes(updatedNotes);
    }

    const onType = async (noteId, updatedKey, updatedValue) => {
        console.log(noteId, updatedKey, updatedValue)
        var updateIdMatch = note => {
            if (note.id !== noteId) {
                return note;
            } else {
                let updatedNote = note;
                if (updatedKey === "title") {
                    updatedNote = {
                        ...note,
                        title: updatedValue
                    };
                } else {
                    updatedNote = {
                        ...note,
                        what: updatedValue
                    };
                }
                return updatedNote;
            }
        };
        var updatedNotes = notes.map(updateIdMatch);
        setNotes(updatedNotes)

        const updatedNote = updatedNotes.find(note => note.id === noteId)
        debouncedUpdateNote(updatedNote)
    }

    const addNote = async () => {
        const note = await mapNote(await api(`sticky_notes/`, { method: "POST", body: JSON.stringify({ canvas: id }) }))
        setNotes([...notes, note])
    }

    return (
        <div className="page-container">
            <div className="canvas">
                <div className="canvas-page-header">

                    <h2 className="page-title">{canvasData.title}</h2>
                    <StickyNotesForm
                        addNote={addNote}
                    />
                </div>


                <div>
                    <StickyNotesList
                        notes={notes}
                        onType={onType}
                        onRemove={onRemove}
                    />
                </div>
            </div>

        </div>
    );
}

export default CanvasPage

const updateNote = async (note) => {
    return await api(`sticky_notes/${note.id}/`, { method: "PUT", body: JSON.stringify(note) })
}

const debounce = (f) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer)
        return new Promise(resolve => {
            timer = setTimeout(
                () => resolve(f(...args)),
                500
            );
        })
    }
}
const debouncedUpdateNote = debounce(updateNote)