import React from 'react';

function DisplayWinner(props) {
  return (
    <div>
      <p>{props.moves[0]} vs. {props.moves[1]}</p>
      {
        props.winner === 'tie' ?
        <p>It's a {props.winner}!</p> :
        <p>{props.winner} is the winner!</p>
      }
    </div>
  );
}

export default DisplayWinner;
