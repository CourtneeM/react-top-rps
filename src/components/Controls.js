import React from 'react';

function Controls(props) {
  return (
    <div>
      {
        props.gameOver
        ? <button onClick={() => props.resetGame()}>Reset Game</button>
        : null
      }
    </div>
  );
}

export default Controls;
