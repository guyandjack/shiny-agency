import {Link} from "react-router-dom";

//import feuille de style
import "../../style/CSS/header.css";




//import fichier image
import darklogo from "../../asset/dark-logo.png";

function Header(){
    return (
      <nav className="header">
        <div className="header__container__img">
          <img
            classname="header-img"
            src={darklogo}
            alt="logo du site shiny"
          ></img>
        </div>

        <ul className="header__container__link">
          <li className="header-li">
            <Link className="header-li__link" to="/">
              Accueil
            </Link>
          </li>
          <li className="header-li">
            <Link className="header-li__link" to="/freelences">
              Profils
            </Link>
          </li>
          <li className="header-li">
            <div className="button-test">
              <Link className="button-test__link" to="/survey/1">
                Faire le test
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
}

export {Header}