const Moves = ({ moves }) => {
  console.log(moves);

  return (
    <div>
      <label htmlFor="ul">10 Moves</label>
      <ul>
        {moves.slice(0, 10).map((move) => {
          return (
            <li key={move.move.name}>
              {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Moves;
