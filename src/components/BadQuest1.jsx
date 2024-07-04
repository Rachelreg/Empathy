import droite from "../assets/right-arrow.png";
import { Link } from "react-router-dom";

export default function BadQuest1() {
  return (
    <div className="goodquest">
      <div className="modal">
        <h1>
          QUESTION N°1 <br /> L’ACCÈS PMR
        </h1>
        <figure className="titreGDQ">
          <h2>Essaye encore !</h2>
        </figure>
        <p>
          La loi sur l'égalité des chances de 2005 impose que tous les nouveaux
          bâtiments ouverts au public ou à usage collectif soient accessibles
          aux personnes handicapées.
        </p>
        <Link to="" classname="ppLink">
          <p className="pLink">Cliquez ici pour en savoir plus </p>
        </Link>
        <Link to="/" className="buttonGQ">
          <button>Suivant
          <img src={droite} alt="flèche suivante" className="flechesuivante" />
          </button>
        </Link>
      </div>
    </div>
  );
}
