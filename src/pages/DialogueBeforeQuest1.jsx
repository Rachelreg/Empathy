import "../styles/DialogueBeforeQuest1.css";

import avatarFemale from "../assets/avatar_female.png";
import avatarFauteuil from "../assets/fauteuil_image.png";

import { Link } from "react-router-dom";
import Question from "../components/Question";

export default function DialogueBeforeQuest1() {
  return (
    <>
      <section className="container_games">
        <section className="content_games">
          <section className="w50">
            <img src={avatarFemale} alt="avatar fille" />
            <section className="chat1">
              <p>
                Tiens justement je te cherchais ! Quel est le retour du
                Directeur concernant la mise en place d’ascenseur dans les
                locaux ?
              </p>
            </section>
          </section>
          <section className="w50">
            <img src={avatarFauteuil} alt="avatar fauteuil" />
            <section className="chat1">
              <p>
                Tiens justement je te cherchais ! Quel est le retour du
                Directeur concernant la mise en place d’ascenseur dans les
                locaux ?
              </p>
            </section>
          </section>
        </section>
        <section className="button_next_container">
            <Link to="/question1" > 
          <button className="button_next">Suivant</button>
            </Link>
        </section>
      </section>
    </>
  );
}
