import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
      winner: "Player 1 Wins!",
    }
  }

  playGame = () => {
    this.setState({
      // playerOne: this.signs[1],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    })
  };

  playScissors = () => {
    this.setState({
      playerOne: this.signs[1],
    })
  };

  playRock = () => {
    this.setState({
      playerOne: this.signs[0],
    })
  };

  playPaper = () => {
    this.setState({
      playerOne: this.signs[2],
    })
  };

  decideWinner = () => {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo

    if (playerOne === playerTwo) {
        return "It's a Tie";
    }
    else if ((playerOne === "rock" && playerTwo === "scissors") || (playerOne === "paper" && playerTwo === "rock") || (playerOne === "scissors" && playerTwo === "paper")) {
      return "Dan Wins!";
    } else {
      return "John Wins!";
    }
  };


  render () {
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne} />
          <PlayerCard sign={this.state.playerTwo} />
        </div>
        <div className="shapesChoice">
        <button type="button" className="button2" onClick={this.playScissors}>Scissor</button>
        <button type="button" className="button2" onClick={this.playRock}>Rock</button>
        <button type="button" className="button2" onClick={this.playPaper}>Paper</button>
        </div>
        <div className="playernames">

          <span className="playername1">Player: Dan</span>
          <span className="playername2"> Player: John</span>
        </div>

        <div className="winner">{this.decideWinner()} </div>
        <button type="button" onClick={this.playGame}>Play Game</button>
      </div>
    )
  }
}

export default Game;
