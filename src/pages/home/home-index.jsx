import {Link} from "react-router-dom";

//import fichier image
import homeImg from "../../asset/home-illustration.svg";

//import feuille de style
import "../../style/CSS/home-index.css";

function Home(){
    return (
      <div className="home-container">
        <div className="home-container__text">
          <p className="home-text">
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </p>
          <div className="button-test">
            <Link className="button-test__link" to="/survey/1">Faire le test</Link>
          </div>
        </div>
        <div className="home-container__img">
          <img
            className="home-img"
            src={homeImg}
            alt="prentation page accueil"
          ></img>
        </div>
      </div>
    );
}

export {Home}