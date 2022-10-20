import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

function Survey(){
    
    const {nbrquestion} = useParams();
    let numberQuestion = parseInt(nbrquestion)
    let uriPageSui = numberQuestion + 1;
    let uriPagePre = numberQuestion - 1;

    
      return (
        <div>
          <h1>On est sur la page du questionnaire</h1>

          <h5>la valeur du parametre "numberOfQuestion" est : {numberQuestion}</h5>

          <nav>

            
            {
                (numberQuestion > 1 && numberQuestion < 10)?

                <div> 
                    <Link to={`/survey/${uriPagePre}`}>Précédent</Link>
                    <Link to={`/survey/${uriPageSui}`}>Suivant</Link>
                </div>:
                    (numberQuestion === 10)?
                    <div>
                        <Link to={`/survey/${uriPagePre}`}>Précédent</Link> 
                        <Link to="/result">Voir les resultats</Link> 
                    </div>:
                    <div>
                        <Link to={`/survey/${uriPageSui}`}>Suivant</Link>
                    </div>

            }

          </nav>
        </div>
      );

    
}

export {Survey}