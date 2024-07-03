import logoProfil from "../assets/icon_profil.png";
import logoSite from "../assets/logo_site.png"
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <section className="container_navbar">
      <div className="logo_profil">
        <img src={logoProfil} alt="logo profil" />
      </div>
      <div className="logo_site">
        <img src={logoSite} alt="logo du site" />
      </div>
      <div className="langue_fr">
        <p>FR</p>
      </div>
    </section>
  );
}