import React from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

//import feuille de style
import "../../style/SAAS/pages/survey.scss"


function Survey(){
    
    const {nbrquestion} = useParams();
    let numberQuestion = parseInt(nbrquestion)
    let uriPageSui = numberQuestion + 1;
    let uriPagePre = numberQuestion - 1;

    
      return (
        <div className="test">
          <p className="test__text-title">Question {numberQuestion}</p>

          <p className="test__text-question">
            Votre application doit-elle impérativement apparaître en premier
            dans les résultats de recherche ?
          </p>

          <form className="test__form">

            <input
              id="oui"
              className="test__form__input"
              type="radio"
              name="response"
              value={true}
            ></input>
            <label className="test__form__label" for="oui">
              Oui
            </label>

            <input
              id="non"
              className="test__form__input"
              type="radio"
              name="response"
              value={false}
            ></input>
            <label className="test__form__label" for="non">
              Non
            </label>

          </form>

          <nav className="test__nav">

            {numberQuestion > 1 && numberQuestion < 10 ? (

              <React.Fragment>
                <Link className="test__nav__link" to={`/survey/${uriPagePre}`}>
                  Précédent
                </Link>
                <Link className="test__nav__link" to={`/survey/${uriPageSui}`}>
                  Suivant
                </Link>
              </React.Fragment>

            ) : numberQuestion === 10 ? (

              <React.Fragment>
                <Link className="test__nav__link" to={`/survey/${uriPagePre}`}>
                  Précédent
                </Link>
                <Link className="test__nav__link" to="/result">
                  Voir les resultats
                </Link>
              </React.Fragment>
              
            ) : (

              <React.Fragment>
                <Link className="test__nav__link" to={`/survey/${uriPageSui}`}>
                  Suivant
                </Link>
              </React.Fragment>

            )}

          </nav>
        </div>
      );

    
}

export {Survey}