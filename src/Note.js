import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

function Note({id, text}) {
	const [hidden, setHidden] = useState(true);
	
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
						<textarea style={{}} className="edit-text" name="editText" data-edittext={id} cols="30" rows="10" defaultValue={text}></textarea>
				}
			</div>
			<div>
				{/*<button onClick={() => { store.dispatch(removeNote(element.id)) }}>Remove</button>
				<button onClick={() => { store.dispatch(saveEdit(element.id)) }}>Save edit</button>*/}
				<button onClick={handleSwitchTextarea}>{hidden ? "Edit" : "Cancel"}</button>
			</div>
		</div>
  );
}

export default Note;
