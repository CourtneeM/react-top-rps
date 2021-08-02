import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const moves = ['Rock', 'Paper', 'Scissors'];

    return (
      <div style={{pointerEvents: this.props.disabled ? 'none' : 'auto'}}>
        <h2>Choose your move</h2>
        {
          moves.map((move, index) => {
            return <button key={index} onClick={e => this.props.playerClick(e)}>{move}</button>
          })
        }
      </div>
    );
  }
}

export default Game;
