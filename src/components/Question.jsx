import { useState } from "react";
import avatar_female from "../assets/avatar_female.png";
import GoodQuest1 from "../components/GoodQuest1.jsx";
import BadQuest1 from "../components/BadQuest1.jsx";

import "../styles/Q1.css";

export default function Question() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedLabel = document
      .querySelector(`input[value="${selectedOption}"]`)
      .closest("label");
    const correct = selectedLabel.getAttribute("data-correct") === "true";
    setIsCorrectAnswer(correct);
    setShowModal(true);
  };

  return (
    <section className="container_questionnaire">
      <img
        className="avatar-quest"
        src={avatar_female}
        alt="Illustration femme debout qui marche"
      />

      {showModal ? (
        isCorrectAnswer ? (
          <GoodQuest1 />
        ) : (
          <BadQuest1 />
        )
      ) : (
        <div className="modal">
          <h2>
            QUESTION N°1 : <br /> L’ACCÈS PMR
          </h2>

          <form className="question" onSubmit={handleSubmit}>
            <p>
              Quelle loi française rend obligatoire l'accessibilité des
              bâtiments neufs aux personnes handicapées?
            </p>
            <br />
            <label data-correct="true">
              <input
                type="radio"
                name="loi"
                value="2005"
                required
                onChange={handleOptionChange}
              />
              La loi sur l'égalité des chances de 2005
            </label>
            <br />
            <label data-correct="false">
              <input
                type="radio"
                name="loi"
                value="2016"
                required
                onChange={handleOptionChange}
              />
              La loi El Khomri de 2016
            </label>
            <br />
            <label data-correct="false">
              <input
                type="radio"
                name="loi"
                value="2015"
                required
                onChange={handleOptionChange}
              />
              La loi NOTRE de 2015
            </label>
            <br />
            <button className="buttonq1" type="submit">
              Valider
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
