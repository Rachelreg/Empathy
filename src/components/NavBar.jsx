import { Link } from "react-router-dom";
import logoProfil from "../assets/icon_profil.png";
import logoSite from "../assets/logo_site.png";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="container_navbar">
      <figure className="logo_site">
        <Link to="/">
          <img src={logoSite} alt="logo du site" />
        </Link>
      </figure>
      <section className="right-section">
        <figure className="logo_profil">
          <img src={logoProfil} alt="logo profil" />
        </figure>
        <section className="langue_fr">
          <select id="langues" name="langues" className="butonLangue">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </section>
      </section>
    </nav>
  );
}
