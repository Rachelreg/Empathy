import "../styles/Accroche.css";
import WomenPregnant from "../assets/pregnant_woman.png";
import Fauteuil from "../assets/fauteuil_image.png";

export default function Accroche() {
  return (
    <section className="box-accroche">
      <h1>Changez le monde avec empathie : jouez, apprenez, incluez !</h1>
      <section className="woman-box">
        <img src={WomenPregnant} alt="Avatar de femme enceinte" />
        <p>
          Plongez dans notre nouveau serious game signé Empathy, une expérience
          immersive dédiée à l'inclusion ! L'information est la première étape
          vers un monde meilleur, et cela commence par la formation et la
          sensibilisation. Ce jeu captivant vous révèle les enjeux de
          l'inclusion et vous donne les clés pour transformer votre
          environnement avec empathie.
        </p>
      </section>
      <section className="men-box">
        <img src={Fauteuil} alt="Avatar homme en fauteuil roulant" />
        <p>
          Apprenez à identifier et surmonter les obstacles, et semez des graines
          de changement positif autour de vous. Saisissez cette opportunité de
          faire la différence et d'acquérir des compétences précieuses en vous
          amusant. Rejoignez l'aventure avec Empathy et devenez un acteur du
          changement dès maintenant !
        </p>
      </section>
    </section>
  );
}
