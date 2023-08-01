import "./CssFiles/Help.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Help = () => {
  return (
    //list of instruction of how to play the game.
    <>
      <div className="help_cover">
        <h2>How to play</h2>
        <ul>
          <li>Hangman game is a guessing game</li>
          <li>The player guess the letters needed to complete the word</li>
          <li>
            The player enters the letter in the inputbox and press ENTER or
            click the "guess" button
          </li>
          <li>
            With very letter you enter press ENTER or click the guess button
          </li>
          <li>
            {" "}
            If the letter is in the mystry word, it will appear on the blanks as
            a clue in the correct position of the letter on the word{" "}
          </li>
          <li>
            But if the letter is not on the mystry word, a drawing of a hangman
            with start to apprear and with each failed attempt the drawing
            continue until it completely form a hangman
          </li>
          <li>
            If you continue to guess corectly, you will complete the word and
            win the game
          </li>
          <li>and you lose the game. But</li>
          <li>Weather you win or lose you can press restart to play again.</li>
        </ul>
        <p></p>
        <nav className="game_link">
          <NavLink className="game_container" to="/game">
            <button> GAME</button>
          </NavLink>
        </nav>
      </div>
    </>
  );
};
export default Help;
