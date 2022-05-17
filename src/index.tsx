import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { store } from './Redux/state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter><App data={store.getState()} dispatch={store.dispatch.bind(store)}/></BrowserRouter>
    );
}
rerenderEntireTree()

store._subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
