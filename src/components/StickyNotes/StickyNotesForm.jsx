import React from 'react'

const StickyNotesForm = props => {
    return (
        <button className="add-new" onClick={props.addNote}>
            {" "}
            + New Note{" "}
        </button>
    )
}

export default StickyNotesForm