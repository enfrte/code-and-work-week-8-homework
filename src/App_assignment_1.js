import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './App.css';

const simpleReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return state + 1;
    case 'DECREMENT_BY_ONE':
      return state - 1
    case 'SET_ZERO':
      return 0
    default:
      return state;  
  }
};

const store = createStore(simpleReducer);
console.log("Initial state - store.getState()", store.getState());

store.subscribe(() => {
  const storeNow = store.getState()
  console.log("storeNow:", storeNow)
})

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={() => { store.dispatch({ type: 'INCREMENT_BY_ONE' })} }><h1>+1</h1></button>
      <button onClick={() => { store.dispatch({ type: 'DECREMENT_BY_ONE' })} }><h1>-1</h1></button>
      <button onClick={() => { store.dispatch({ type: 'SET_ZERO' })} }><h1>Reset</h1></button>
      <h1>Counter: {store.getState()}</h1>
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp();
store.subscribe(renderApp)

export default App;
