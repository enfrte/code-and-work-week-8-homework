import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, addNote, removeNote, saveEdit } from "./reducer"

function Note({id, text}) {
	const dispatch = useDispatch();
	const [hidden, setHidden] = useState(true);
	const [newText, setNewText] = useState(text);
	
	const handleSwitchTextarea = () => {
    setHidden(!hidden);
 	};

  return (              
		<div className="note-container" id={id}>
			<div className="text-container" data-text={id}>
				<p className="note-text">{text}</p>
				<h4>Edit area</h4>
				{
					hidden ? 
						null 
					:
				<textarea 
					onKeyUp={(e) => { setNewText(e.target.value) }} 
					className="edit-text" 
					name="editText" 
					data-edittext={id} 
					cols="30" rows="10" 
					defaultValue={newText}>
				</textarea>
				}
			</div>
			<div>
				<button onClick={() => { dispatch(removeNote(id)) }}>Remove</button>
				<button onClick={() => { dispatch(saveEdit(id, newText)) }}>Save edit</button>
				<button onClick={handleSwitchTextarea}>{hidden ? "Edit" : "Cancel"}</button>
			</div>
		</div>
  );
}

export default Note;
