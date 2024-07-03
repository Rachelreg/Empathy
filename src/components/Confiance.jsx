import Avatar1 from "../assets/Avatar1.jpg";
import Avatar2 from "../assets/Avatar2.jpg";
import Avatar3 from "../assets/Avatar3.jpg";

import "../styles/Confiance.css";

export default function Confiance() {
  return (
    <section className="globaleConfiance">
      <h1>Ils nous ont fait confiance !</h1>

      <section className="globalConfiance">
        <article className="Avatar1">
          <img src={Avatar1} alt="Avatar1" />
          <p>
            "Un site incroyable pour apprendre sur l'inclusion ! Les jeux sont
            divertissants et éducatifs. Idéal pour sensibiliser à la diversité
            dans notre entreprises. Nous recommandons fortement !"
          </p>
        </article>

        <article className="Avatar2">
          <img src={Avatar2} alt="Avatar2" />
          <p>
            "Empathy propose des alternatives ludiques qui sont excellentes pour
            comprendre l'inclusion. Faciles d'accès, ils abordent des sujets
            complexes de manière ludique. Un outil précieux pour l'intégration
            de nos équipes."
          </p>
        </article>

        <article className="Avatar3">
          <img src={Avatar3} alt="Avatar3" />
          <p>
            "Super expérience avec ce site ! Les jeux sont interactifs et très
            bien conçus. Ils permettent de se sensibiliser aux enjeux de
            l'inclusion tout en s'amusant. Une superbe ressource éducative
            incontournable !"
          </p>
        </article>
      </section>
    </section>
  );
}
