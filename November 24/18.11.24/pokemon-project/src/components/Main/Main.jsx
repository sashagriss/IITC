import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import OneCard from "../OneCard/OneCard";

const Main = ({ setClickedPok }) => {
  const [pokemons, setPokemons] = useState(null);

  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
      );
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="">Pokedox</h1>
      {pokemons && (
        <div>
          <ul className={styles.Main}>
            {pokemons.map((pok) => {
              {
                return (
                  <OneCard
                    key={pok.name}
                    url={pok.url}
                    setClickedPok={setClickedPok}
                  />
                );
              }
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Main;
