import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitterx from "../assets/images/twitterx.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <h1 className="center">
        Le leader français du jeu digital en entreprise
      </h1>
      <section className="rows">
        <section className="button">
          <Link to="mailto:regulierrachel@gmail.com" target="_blank">
            <button>Demande de démo</button>
          </Link>
        </section>
        <section className="firstCol">
          <Link to="/" alt="lien de sensibilisation">
            <p>Sensibilisation</p>
          </Link>
          <Link to="/" alt="lien des ressources humaines">
            <p>Ressources Humaines</p>
          </Link>
          <Link to="/" alt=" link of Learning & Development">
            <p>Learning & Development</p>
          </Link>
          <Link to="/" alt="link of Marketing & Branding">
            <p>Marketing & Branding</p>
          </Link>
        </section>
        <section className="secondCol">
          <Link to="/" alt="liens de la page qui sommes nous">
            <p>Qui sommes nous ?</p>
          </Link>
          <Link to="/" alt="lien d'information sur nos clients">
            <p>Nos clients</p>
          </Link>
          <Link to="/" alt="lien pour découvrir notre équipe">
            <p>Équipe</p>
          </Link>
          <Link to="/" alt="lien sur la sécurité">
            <p>Sécurité</p>
          </Link>
        </section>
        <section className="basDeFooter">
          <Link to="/" alt="lien sur les mentions légales">
            <p>Mention Légale</p>
          </Link>
          <Link to="mailto:regulierrachel@gmail.com" target="_blank">
            <p>Contact</p>
          </Link>
          <Link to="/" alt="lien des CGV">
            <p>CGV</p>
          </Link>
        </section>
        <section className="allLogos">
          <Link
            to="https://github.com"
            target="_blank"
            alt="lien vers la page d'accueil de Github"
          >
            <img src={github} alt="logo du github" />
          </Link>
          <Link
            to="https://www.facebook.com/?locale=fr_FR"
            target="_blank"
            alt="lien vers la page de Facebook"
          >
            <img src={facebook} alt="logo de Facebook" />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            alt="lien vers la page d'instagram"
          >
            <img src={instagram} alt="logo d'instagram" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            alt="lien vers la page de Linkedin"
          >
            <img src={linkedin} alt="logo de Linkedin" />
          </Link>
          <Link
            to="https://x.com/?lang=fr"
            target="_blank"
            alt="lien vers la page de X"
          >
            <img src={twitterx} alt="logo de X" />
          </Link>
        </section>
      </section>
    </div>
  );
}
