import Slide from "./Slide.jsx";
const BaseStats = ({ stats }) => {
  console.log(stats);

  return (
    <div>
      {stats.map((stat) => {
        console.log(stat.stat.name);
        return (
          <div key={stat.stat.name}>
            <label htmlFor="slide">{stat.stat.name}</label>
            <Slide value={stat.base_stat} />
          </div>
        );
      })}
    </div>
  );
};

export default BaseStats;
