import React from 'react'
import StickyNote from './StickyNote'

const StickyNotesList = props => {
    return (
        props.notes.length ?
            <ul>
                {props.notes.map((note) => <li> <StickyNote
                    note={note}
                    key={note.id}
                    onType={props.onType}
                    onRemove={props.onRemove}
                /></li>)}
            </ul> : <h3>No notes</h3>)
}

export default StickyNotesList