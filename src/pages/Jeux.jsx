import { Link } from "react-router-dom";
import "../styles/Jeux.css"
import gauche from "../assets/left-arrow.png";

export default function Jeux() {
  return (
    <section className="container_games3">
       <section className="box-retourJeux">
          <Link to="/jeuxdebut">
            <p>
              <img src={gauche} alt="flèche retour" className="flecheretour" />
              Retour
            </p>
          </Link>
        </section>
        <section className="p_jeux">
            <p>Allez à la rencontre de vos collègues en vous rendant dans une salle</p>
        </section>
        <Link to="/beforequest1">
<button className="button1_game"></button>
        </Link>
<button className="button2_game"></button>
<button className="button3_game"></button>
<button className="button4_game"></button>
<button className="button5_game"></button>
<button className="button6_game"></button>
<button className="button7_game"></button>
    </section>
  );
}
