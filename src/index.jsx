import ReactDOM from 'react-dom/client';
import React from "react";

//import de l' application
import {App} from "./component/App/App.js"

// import test performance de l'appli
import reportWebVitals from './reportWebVitals';


// code principal
const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
