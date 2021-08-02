import React, { Component } from 'react';
import Game from './components/Game';
import Controls from './components/Controls';
import DisplayWinner from './components/DisplayWinner';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerMove: undefined,
      computerMove: undefined,
      winner: undefined,
      gameOver: false,
    }

    this.playerClick = this.playerClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  playerClick(e) {
    this.setState({
      playerMove: e.target.textContent.toLowerCase()
    }, () => this.computerMove());
  }

  computerMove() {
    const moves = ['Rock', 'Paper', 'Scissors'];

    this.setState({
      computerMove: moves[Math.floor(Math.random() * moves.length)].toLowerCase()
    }, () => this.detectWinner());
  }

  detectWinner() {
    const winningCombos = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }

    if (winningCombos[this.state.playerMove] === this.state.computerMove) {
      return this.setState({winner: 'Player', gameOver: true});
    }
    
    if (winningCombos[this.state.computerMove] === this.state.playerMove) {
      return this.setState({winner: 'Computer', gameOver: true});
    }
      
    return this.setState({winner: 'tie', gameOver: true});
  }

  resetGame() {
    this.setState({
      playerMove: undefined,
      computerMove: undefined,
      winner: undefined,
      gameOver: false,
    });
  }

  render() {
    return (
      <div>
        <Game playerClick={this.playerClick} disabled={this.state.gameOver} />
        <Controls gameOver={this.state.gameOver} resetGame={this.resetGame}/>
        { this.state.winner ? <DisplayWinner winner={this.state.winner} moves={[this.state.playerMove, this.state.computerMove]} /> : null }
      </div>
    );
  }
}

export default App;
