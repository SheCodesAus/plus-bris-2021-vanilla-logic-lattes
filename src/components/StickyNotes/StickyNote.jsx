import React from 'react'
import './StickyNote.css'

const StickyNote = (props) => {

    const updateTitle = e => {
        var updatedValue = e.target.value;
        var editMeId = props.note.id;
        props.onType(editMeId, "title", updatedValue);
    };
    const updateDescription = e => {
        var updatedValue = e.target.value;
        var editMeId = props.note.id;
        props.onType(editMeId, "what", updatedValue);
    };
    const deleteOnClick = (id) => {
        console.log(id)
        props.onRemove(props.note.id)
    }
    return (
        <div className="note">
            <input
                type="text"
                value={props.note.title}
                onChange={updateTitle}
                placeholder="Title"
                className="note__title"
            />
            <textarea
                value={props.note.what}
                onChange={updateDescription}
                placeholder="What, Why, Who..."
                className="note__description"
            />
            <span className="note__delete" onClick={() => deleteOnClick(props.note.id)}>
                X
            </span>
        </div>
    );
}



export default StickyNote