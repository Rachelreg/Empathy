import "../styles/GoodQuest1.css";
import { Link } from "react-router-dom";
import Bandeau from "../assets/Frame_79.png";

export default function GoodQuest1() {
  return (
    <div className="goodquest">
      <div className="modal">
        <h1>
          QUESTION N°1 <br /> L’ACCÈS PMR
        </h1>
        <figure className="titreGDQ">
          <h2 className="h2GQ">
            <img src={Bandeau} alt="Ecusson de victoire" className="Ecusson" />
            Bonne réponse !
          </h2>
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
          <button>Suivant</button>
        </Link>
      </div>
    </div>
  );
}
