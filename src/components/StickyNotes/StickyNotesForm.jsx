import React from 'react'
import '../Authentication/LoginForm.css'

const StickyNotesForm = props => {
    return (
        <a href="#" className="button" onClick={props.addNote}>
            {" "}
            + New Note{" "}
        </a>
    )
}

export default StickyNotesForm