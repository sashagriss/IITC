import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./OneCard.module.css";

function OneCard(props) {
  const [eachPok, setEachPok] = useState(null);
  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(props.url);

      setEachPok(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  const typeColors = {
    fire: "#FFABAB",
    water: "#A0C4FF",
    grass: "#B7E4C7",
    electric: "#FFF5B7",
    psychic: "#FFB7D5",
    normal: "#E8E8E8",
    poison: "#D7A6D8",
    fighting: "#FFB7B7",
    flying: "#D6A0FF",
    bug: "#D1FF73",
  };

  const cardBgColor = eachPok
    ? typeColors[eachPok.types[0].type.name] || "#ffffff"
    : "#ffffff";

  return (
    eachPok && (
      <li
        className={styles.oneCard}
        style={{ backgroundColor: cardBgColor }}
        onClick={() => {
          props.setClickedPok(eachPok);
        }}
      >
        <div className="card-container">
          <h2 className="name">
            {eachPok.name.charAt(0).toUpperCase() + eachPok.name.slice(1)}
          </h2>
          <p className="abilities"></p>
          <img src={eachPok.sprites.other.showdown.front_default} alt="?" />
          <ul style={{ listStyle: "none" }}>
            {eachPok.types.map((type) => {
              return (
                <li className={styles["type-li"]} key={type.type.name}>
                  {type.type.name}
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    )
  );
}

export default OneCard;
