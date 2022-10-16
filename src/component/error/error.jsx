import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Cette page est introuvable</h1>
      <h1>Erreur 404</h1>

      <Link to="/">retour vers page accueil</Link>
    </div>
  );
}

export {Error}
