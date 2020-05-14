import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Note from "./Note";
import './App.css';

const simpleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {id: Date.now(), text: action.data}];
    case 'REMOVE':
      return state.filter((obj) => {
        return obj.id !== action.data;
      });
    case 'SAVE_EDIT':
      const newText = document.querySelector(`[data-edittext="${action.data}"]`).value;
      const element = state.find(n => n.id === action.data);
      const newElement = {
        ...element,
        text: newText
      }
      return state.map((element) => {
        if (element.id === action.data) {
          return newElement;
        } else {
          return element;
        }
      })
    default:
      return state;  
  }
};

const store = createStore(simpleReducer);
console.log("Initial state - store.getState()", store.getState());

store.subscribe(() => {
  const storeNow = store.getState();
  console.log("storeNow:", storeNow)
})

function App() {
  const addNote = (noteText) => {
    return { type: 'ADD', data: noteText };
  };

  const removeNote = (id) => {
    console.log(id);
    // you can also remove the element from the dom with the id
    return { type: 'REMOVE', data: id };
  };
  
  const editNote = (id) => {
    document.querySelector(`[data-edittext="${id}"]`).style.display = 'visible';
    //console.log(newText);
  };

  const saveEdit = (id) => {
    return { type: 'SAVE_EDIT', data: id };
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (e.target.note.value < 1) {
      return
    }
    store.dispatch(addNote(e.target.note.value));
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
        store.getState().length > 0 ? 
          <div className="notes-container">
            {
              store.getState().map(obj => {
                return (
                  <Note key={obj.id} id={obj.id} text={obj.text} />
                );
              })
            }
          </div>
        : 
          <p>No saved notes.</p>
      }

    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp();
store.subscribe(renderApp)

export default App;
