import { Link } from "react-router-dom";
import gauche from "../assets/left-arrow.png";
import droite from "../assets/right-arrow.png";

import "../styles/JeuxDebut.css";
import avatar from "../assets/fauteuil_image.png";

export default function JeuxDebut() {
  return (
    <>
      <section className="container_games2">
        <section className="box-retour">
          <Link to="/">
            <p>
              <img src={gauche} alt="flèche retour" className="flecheretour" />
              Retour
            </p>
          </Link>
        </section>
        <section className="test">
          <section className="mess_bvn">
            <p>Bienvenue dans notre entreprise !</p>
            <p>
              Profite de ce premier jour pour te balader dans les locaux et
              rencontrer tous les collaborateurs. N’hésite pas à leur poser des
              questions sur leur environnement de travail !
            </p>
          </section>
          <section>
            <Link to="/jeux">
              <button className="button_jeux_debut">
                Cliquez ici pour démarrer l’aventure{" "}
                <img src={droite} alt="flèche suivante" className="flechesuivante" />
              </button>
            </Link>
          </section>
        </section>
        <section className="avatar_container">
          <img
            src={avatar}
            alt="illustration personne à mobilité réduite"
          />
        </section>
      </section>
    </>
  );
}
