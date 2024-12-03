import { useState } from "react";
import "../styles/info.css";
import RandomGift from "./randomGift";

function Info() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const userInfo = [firstname, lastname, gender, age];

      
  return (
    <div className="infoContainer">
      <div className="infoCard">
        <h1>VOS INFOS:</h1>
        <form className="form">
          <div>
            <label>
              Prénom:
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </label>
            <label>
              Nom:
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </label>
            <label>
              Genre:
                <select name="gender" id="gender-select" onChange={(e) => setGender(e.target.value)}>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Non Renseigné">Non-Renseigné</option>
                </select>
            </label>
            <label>
              Tranche d'âge:
                <select name="age" id="age-select" onChange={(e) => setAge(e.target.value)}>
                <option value="0 à 3 ans">0 à 3 ans</option>
                <option value="4 à 6 ans">4 à 6 ans</option>
                <option value="7 à 10 ans">7 à 10 ans</option>
                <option value="11 à 15 ans">11 à 15 ans</option>
              </select>
            </label>
          </div>
          <button type="submit" id="magicButton" onClick={(e) => {
            e.preventDefault();
            
            <RandomGift />
            console.log(userInfo);
          }}>LANCER LA MAGIE DE NOEL!</button>
        </form>
      </div>
    </div>
  );
};

export default Info;
