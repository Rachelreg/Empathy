import { Link } from "react-router-dom"
import "../styles/Entete.css"

export default function Entete() {

  return (
    <section className="container_entete">
      <h1>BIENVENUE</h1>
      <p>Empathy a été créé pour <span>sensibiliser</span> les employés aux enjeux de l'inclusivité en entreprise, leur faire comprendre les bonnes pratiques et les comportements appropriés pour favoriser <span>un environnement inclusif</span>. Le jeu se déroule dans un environnement de bureau virtuel où les joueurs naviguent à travers différents pièces et répondent à des questions ou à des scénarios liés à l'inclusivité.</p>
      <Link to="/jeuxdebut">
      <button className="button_game">Commencer la démo</button>
      </Link>
    </section>
  )
}
// 