import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./PokDetails.css";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";

// Import components
import About from "../About/About";
import BaseStats from "../BaseStats/BaseStats";
import Evolution from "../Evolution/Evolution";
import Moves from "../Moves/Moves";

const PokDetails = (props) => {
  const updatePok = () => {
    props.setClickedPok(null);
  };
  const [species, setSpecies] = useState(null);

  const fetchSpecies = async () => {
    try {
      const { data } = await axios.get(props.clickedPok.species.url);
      setSpecies(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSpecies();
  }, []);
  const [active, setActive] = useState("About");

  const handleActive = (e) => {
    setActive(e.target.innerText);
  };

  return (
    <div>
      <Dialog open={props.open}>
        <Button onClick={updatePok}>x</Button>
        <DialogTitle>
          {props.clickedPok.name.charAt(0).toUpperCase() +
            props.clickedPok.name.slice(1)}
        </DialogTitle>
        <img
          src={props.clickedPok.sprites.other["official-artwork"].front_shiny}
        />
        <div className="buttons-description">
          <button
            onClick={handleActive}
            className={active === "About" ? "bold" : "btn-desc"}
          >
            About
          </button>
          <button
            onClick={handleActive}
            className={active === "Base Stats" ? "bold" : "btn-desc"}
          >
            Base Stats
          </button>
          <button
            onClick={handleActive}
            className={active === "Evolution" ? "bold" : "btn-desc"}
          >
            Evolution
          </button>
          <button
            onClick={handleActive}
            className={active === "Moves" ? "bold" : "btn-desc"}
          >
            Moves
          </button>
        </div>
        {active === "About" && (
          <About pokes={props.clickedPok} species={species} />
        )}
        {active === "Base Stats" && (
          <BaseStats stats={props.clickedPok.stats} />
        )}
        {active === "Evolution" && <Evolution species={species} />}
        {active === "Moves" && <Moves moves={props.clickedPok.moves} />}
      </Dialog>
    </div>
  );
};

export default PokDetails;
