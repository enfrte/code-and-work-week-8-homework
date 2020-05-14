import React from 'react';
import { addNote } from "./reducer"
import { useDispatch, useSelector } from 'react-redux'
import Note from "./Note";
import './App.css';

function App() {

  const dispatch = useDispatch();
  const notes = useSelector(state => state);
  //console.log("notes", notes);
  
  const submitNote = (e) => {
    e.preventDefault();
    if (e.target.note.value < 1) {
      return
    }
    dispatch(addNote(e.target.note.value));
    e.target.note.value = "";
  };

  return (
    <div className="App">
      <h2>Note taking app</h2>
      <form onSubmit={submitNote}>
        <div>
          <textarea name="note" id="note" cols="100" rows="10" ></textarea>
        </div>  
        <button type="submit"><h3>Save note</h3></button>
      </form>
      <h3>Notes database</h3>
      {
        notes.length > 0 ? 
          <div className="notes-container">
            {
              notes.map(obj => {
                return (
                  <Note key={obj.id} id={obj.id} text={obj.text} />
                );
              })
            }
          </div>
        : 
          <p className="single-message">No saved notes.</p>
      }

    </div>
  );
}

export default App;
