import "../styles/DialogueBeforeQuest1.css";

import avatarFemale from "../assets/avatar_female.png";
import avatarFauteuil from "../assets/fauteuil_image.png";



export default function DialogueBeforeQuest1() {
  return (
    <>
      <section className="container_games">
        <section className="content_games">

<section className="w50">

        <img src={avatarFemale} alt="avatar fille" />
</section>
<section className="w50">

        <img src={avatarFauteuil} alt="avatar fauteuil" />
</section>
        </section>
        <section className="button_next_container">

      <button className="button_next">Suivant</button>
        </section>

      </section>
    </>
  );
}
