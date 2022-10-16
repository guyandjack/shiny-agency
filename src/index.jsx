import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import des pages
import {Home} from "./pages/home/home-index.jsx";
import {Survey} from "./pages/survey.jsx";
import {Freelences} from "./pages/freelance/freelences-index";
import {Result} from "./pages/result/result-index.jsx";

//import des composants
import {Header} from "./component/header/index.jsx";
import {Error} from "./component/error/error.jsx";


import './index.css';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      
      
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route  path="/survey/:nbrquestion" element={<Survey />}></Route>

          <Route  path="/freelences" element={<Freelences />}></Route>

          <Route  path="/result" element={<Result />}></Route>

          <Route path="/*" element={<Error />}></Route>
        </Routes>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
