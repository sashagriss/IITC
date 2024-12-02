const About = ({ pokes, species }) => {
  const generateGender = () => {
    return species.gender_rate == 0
      ? "100% Male"
      : species.gender_rate == 1
      ? "87.5% Male, 12.5% Female"
      : species.gender_rate == 2
      ? "75% Male, 25% Female"
      : species.gender_rate == 3
      ? "66.7% Male, 33.3% Female"
      : species.gender_rate == 4
      ? "50% Male, 50% Female"
      : species.gender_rate == 5
      ? "33.3% Male, 66.7% Female"
      : species.gender_rate == 6
      ? "25% Male, 75% Female"
      : species.gender_rate == 7
      ? "12.5% Male, 87.5% Female"
      : species.gender_rate == 8
      ? "100% Female"
      : "None";
  };

  return (
    <div className="about">
      <ul>
        <li>
          Species <span>{species?.evolves_from_species?.name || "'None'"}</span>
        </li>
        <li>
          Height <span>{pokes?.height + " " + "(dm)" || "None"}</span>
        </li>
        <li>
          Weight <span>{pokes?.weight + " " + "(hg)" || "'None'"}</span>
        </li>
        <li>
          Abilities{" "}
          <span>
            {pokes.abilities.map((ability) => ability.ability.name).join(", ")}
          </span>
        </li>
      </ul>
      <label htmlFor="ul-breeding">Breeding:</label>
      <ul name="Breeding">
        <li>
          Gender{" "}
          <span>{species?.gender_rate ? generateGender() : "'None'"}</span>
        </li>
        <li>
          Egg Groups{" "}
          <span>
            {species?.egg_groups.map((group) => group.name).join(", ") ||
              "'None'"}
          </span>
        </li>
        <li>
          Egg Cycle <span>{species?.hatch_counter || "'None'"}</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
