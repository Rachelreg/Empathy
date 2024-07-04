import { useState } from "react";
import avatar_female from "../assets/avatar_female.png";

import "../styles/Q1.css";

export default function Question() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="container_questionnaire">
      <img
        className="avatar-quest"
        src={avatar_female}
        alt="Illustration femme debout qui marche"
      />

      <div className="modal">
        <h2>
          {" "}
          QUESTION N°1 : <br /> L’ACCÈS PMR{" "}
        </h2>

        <form className="question">
          <p>
            {" "}
            Quelle loi française rend obligatoire l'accessibilité des batiments
            neufs aux personnes handicapées?
          </p>
          <br />
          <label className="labelQuestion">
            {" "}
            <input
              type="radio"
              name="loi"
              value="2005"
              required
              onChange={handleOptionChange}
            />{" "}
            La loi sur l'égalité des chances de 2005{" "}
          </label>
          <br />
          <label className="labelQuestion">
            {" "}
            <input
              type="radio"
              name="loi"
              value="2016"
              required
              onChange={handleOptionChange}
            />{" "}
            La loi El Khomri de 2016{" "}
          </label>
          <br />
          <label className="labelQuestion">
            {" "}
            <input
              type="radio"
              name="loi"
              value="2015"
              required
              onChange={handleOptionChange}
            />{" "}
            La loi NOTRE de 2015{" "}
          </label>
        </form>

        <button className="buttonq1" type="submit">
          Valider
        </button>
      </div>
    </section>
  );
}
