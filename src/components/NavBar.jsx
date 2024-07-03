import { Link } from "react-router-dom";
import logoProfil from "../assets/icon_profil.png";
import logoSite from "../assets/logo_site.png"
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="container_navbar">
      <header className="logo_profil">
        <Link to="/">
        <img src={logoProfil} alt="logo profil" />
        </Link>
      </header>
      <figure className="logo_site">
        <img src={logoSite} alt="logo du site" />
      </figure>
      <section className="langue_fr">
        <p>FR</p>
      </section>
    </nav>
  );
}