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
                onChange={props.note._user.username === username ? updateTitle : ""}
                placeholder="Title"
                className="note__title"
            />
            <div className="inner-sticky-wrapper">
                <textarea
                    rows="10"
                    value={props.note.what}
                    onChange={props.note._user.username === username ? updateDescription : ""}
                    placeholder="What, Why..."
                    className="note__description"
                />
                <input
                    type="text"
                    value={"Who: " + props.note._user.username}
                    placeholder="Title"
                    className="note__title note__name"
                />
            </div>
            {props.note._user.username === username &&
                <span className="note__delete" onClick={() => deleteOnClick(props.note.id)}>
                    X
                </span>
            }

        </div>
    );
}



export default StickyNote

const username = window.localStorage.getItem("username");