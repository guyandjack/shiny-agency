// fonction qui genere la page "freelences"

import {Card} from "../../component/card/card.jsx";
import { freelenceProfiles } from "../../data/freelence-profiles/freelence-profiles.jsx";

function Freelences(){
    return (
      <div>
        <h1>On est sur la page "freelences"</h1>
        <ul>
          {freelenceProfiles.map((freelencer) => {
            return (
              <li key={freelencer.title}>
                <Card label={freelencer.name} picture={freelencer.picture} title={freelencer.jobTitle}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export {Freelences}