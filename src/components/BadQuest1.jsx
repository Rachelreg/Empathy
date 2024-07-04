import "../styles/BadQuest.css";
import reponse from "../assets/tete-reponse.png";
import { Link } from "react-router-dom";

export default function BadQuest1() {
  return (
    <div className="badquest">
      <div className="modal">
        <h1>
          QUESTION N°1 <br /> L’ACCÈS PMR
        </h1>
        <h2>Mauvaise réponse !</h2>
        <p>
          La loi sur l'égalité des chances de 2005 impose que tous les nouveaux
          bâtiments ouverts au public ou à usage collectif soient accessibles
          aux personnes handicapées. Cette loi marque une avancée importante en
          matière d'inclusion et d'accessibilité en France, visant à garantir
          que les infrastructures et services soient accessibles à tous.
        </p>
        <Link to="/">
          <button>Suivant</button>
        </Link>
      </div>
    </div>
  );
}
