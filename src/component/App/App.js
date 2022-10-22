//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import { Home } from "../../pages/home/home-index.jsx";
import { Survey } from "../../pages/test/survey.jsx";
import { Freelences } from "../../pages/freelance/freelences-index";
import { Result } from "../../pages/result/result-index.jsx";

//import des composants
import { Header } from "../header/header.jsx";
import { Error } from "../error/error.jsx";

//import fichier de style
import "../../style/CSS/App.css"
import "../../style/CSS/normalize.css"




function App(){
  return(
    <Router>

      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/survey/:nbrquestion" element={<Survey />}></Route>

        <Route path="/freelences" element={<Freelences />}></Route>

        <Route path="/result" element={<Result />}></Route>

        <Route path="/*" element={<Error />}></Route>
      </Routes>

    </Router>
  )
}
export  {App};
