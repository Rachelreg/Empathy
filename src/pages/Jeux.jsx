import { Link } from "react-router-dom";
import "../styles/Jeux.css"

export default function Jeux() {
  return (
    <section className="container_games3">
        <section className="p_jeux">
            <p>Allez à la rencontre de vos collègues en cliquant dans une salle</p>
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
