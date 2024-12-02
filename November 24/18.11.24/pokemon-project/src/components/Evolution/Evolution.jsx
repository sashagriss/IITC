import axios from "axios";

const Evolution = ({ species }) => {
  console.log(species);
  // const fetchEvolution = async () => {
  //   const data = await axios.get(species.evolution_chain.url);
  //   console.log(data);
  // };
  // fetchEvolution();
  return (
    <ul>
      <li>
        Base Happiness: <span>{species.base_happiness}</span>
      </li>
      <li>
        Capture Rate: <span>{species.capture_rate}</span>
      </li>
    </ul>
  );
};

export default Evolution;
