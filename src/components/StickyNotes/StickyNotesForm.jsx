import React from 'react'
import '../Authentication/LoginForm.css'

const StickyNotesForm = props => {
    return (
        <button className="button" onClick={props.addNote}>
            {" "}
            + New Note{" "}
        </button>
    )
}

export default StickyNotesForm