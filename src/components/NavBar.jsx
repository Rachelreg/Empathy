import logoProfil from "../assets/icon_profil.png";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <section className="container_navbar">
      <div className="logo_profil">
        <img src={logoProfil} alt="logo profil" />
      </div>
      <div className="logo_site">
        <h1>LOGO</h1>
      </div>
      <div className="langue_fr">
        <p>FR</p>
      </div>
    </section>
  );
}