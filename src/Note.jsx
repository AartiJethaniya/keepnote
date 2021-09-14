import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Note = (props) =>{
    const deleteNote = ()=> {
        props.deleteItem(props.id);
    };
    return (
        <>
            <div className = "note">
            <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <button className = "btn" onClick = {deleteNote}>
                    < DeleteOutlineOutlinedIcon className = "deleteIcon" />
                </button>
            </div>
        </>
    );
}

export default Note;