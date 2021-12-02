import React from 'react'
import StickyNote from './StickyNote'
import './StickyNote.css'

const StickyNotesList = props => {
    return (
        props.notes.length ?
            <ul className="stickynotes-list">
                {props.notes.map((note) => <li> <StickyNote
                    note={note}
                    key={note.id}
                    onType={props.onType}
                    onRemove={props.onRemove}
                /></li>)}
            </ul> : <h3 id="no-notes">No notes yet for this canvas</h3>)
}

export default StickyNotesList