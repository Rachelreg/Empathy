/*import { useState } from "react";*/
import { useHistory } from "react-router-dom";
import { useState } from "react";

import avatar_female from "../assets/avatar_female.png"

import "../styles/Q1.css";

export default function Q1() { 

    const [selectedOption, setSelectedOption] = useState("")
    const history = useHistory();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

   /* useHistory:contrôler la navigationde manière programmatique*/
    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === "2005") {
            history.push("/jeux");
        } else {
            history.push("/jeuxdebut");
        }
    };

    return (
        <section className="container_games">
            <section className="container_questionnaire">
            <h2> Question N°1 </h2>

            <form >
            
             <label> Quelle loi française rend obligatoire l'accessibilité des batiments neufs aux personnes handicapées?</label>
         
               <label> <input type="radio" name="loi" value="2005"required onChange={handleOptionChange}/> La loi sur l'égalité des chances de 2005 </label>
               <label> <input type="radio"name="loi" value="2016" required onChange={handleOptionChange}/> La loi El Khomri de 2016 </label>
               <label> <input type="radio"name="loi" value="2015" required onChange={handleOptionChange}/> La loi NOTRE de 2015 </label>
            
            </form>

            <button className="buttonq1" type="submit"onSubmit={{handleSubmit}}>Valider</button>

            <section>
                <img className="avatar-quest" src={avatar_female} alt="Illustration femme debout qui marche" />
            </section>
            </section>
        </section>

    );
}