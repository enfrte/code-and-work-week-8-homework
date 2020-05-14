import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import simpleReducer from './reducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';

const simpleStore = createStore(simpleReducer);

simpleStore.subscribe(() => {
  console.log(simpleStore.getState());
})


const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={simpleStore}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

simpleStore.subscribe(renderApp);
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
