//importing the neccessar dependencies frpm react and bootstrap and also the images from images components;
//It imports a series of images (state1 to state11) that represent the different stages of the Hangman game.

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./Hangman.css";
import state1 from "../Images/state1.GIF";
import state2 from "../Images/state2.GIF";
import state3 from "../Images/state3.GIF";
import state4 from "../Images/state4.GIF";
import state5 from "../Images/state5.GIF"; //imports a series of images (state1 to state11) that represent the different stages of the Hangman game.
import state6 from "../Images/state6.GIF";
import state7 from "../Images/state7.GIF";
import state8 from "../Images/state8.GIF";
import state9 from "../Images/state9.GIF";
import state10 from "../Images/state10.gif";
import state11 from "../Images/state11.GIF";
import dance from "../Images/dance.gif";

//The RANDOMWORDS array contains a list of words that can be randomly chosen for the game.
const RANDOMWORDS = [
  "apple",
  "banana",
  "cat",
  "carrot",
  "dog",
  "zebra",
  "milk",
  "orange",
  "beer",
  "boy",
  "life",
  "water",
  "exchange",
  "hope",
];

const Hangman = () => {
  const [randomWord, setRandomWord] = useState(""); //Stores the randomly selected word for the game.
  const [letter, setLetter] = useState(""); //Represents the current letter input by the user.
  const [blanks, setBlanks] = useState(""); //Keeps track of the blanks and correctly guessed letters in the word.
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); //racks the number of incorrect guesses made by the user.
  const [gameOver, setGameOver] = useState(false); //Indicates whether the game is over.
  const [winner, setWinner] = useState(false); // Indicates whether the user has won the game.

  const handleLetterChange = (event) => {
    setLetter(event.target.value); //This function will be responsible to update the letter state when the user types a letter into the inputbox
  };

  const handleSubmit = (event) => {
    //function is triggered when the user submits a guess by clicking the submit button.
    event.preventDefault();
    if (letter !== "") {
      //conditional statement to check if the letter variable is not empty.if the condtion is true.
      if (randomWord.includes(letter)) {
        //proceed to check if the mystry word(randomWord) includes the letter using "includes()"method

        //if the guessed letter is found in the mystry word, generate a new string of blanks with the letter in the correct position
        const newBlanks = blanks
          .split("") //this method splits the blanks string into an array of characters.
          .map((char, index) => (randomWord[index] === letter ? letter : char)) //this map() method iterates over each character and checks if the corresponding character in the randomWord matches the guessed letter.
          .join(""); //join() method joins the modified array of characters back into a string.
        //The new string of blanks, with the correctly guessed letters revealed, is assigned to the newBlanks variable.
        setBlanks(newBlanks); //setBlanks()updates the state of blanks

        //check if the updated newBlanks string is equal to randomWord,this means you have guessed all letters correctly ,
        if (newBlanks === randomWord) {
          setWinner(true); //updates the winner state to true.
        }
      } else {
        //if the letter is not included in the randmWord, execute this block.
        // The code increments the incorrectGuesses state variable by 1 using setIncorrectGuesses(incorrectGuesses + 1).
        //This keeps track of the number of incorrect guesses made by the player.
        setIncorrectGuesses(incorrectGuesses + 1); //
        if (incorrectGuesses === 10) {
          //if incorrectGuesses is equal to 10, means the player made 10 incorrect attempts
          setGameOver(true); //therefore  lose the game. setGameOver to true.
        }
      }
      setLetter("");
    }
  };
  //The restartGame function resets all the state variables to their initial values, effectively restarting the game.
  const restartGame = () => {
    window.location.reload();
    setRandomWord("");
    setLetter("");
    setBlanks("");
    setIncorrectGuesses(0);
    setGameOver(false);
    setWinner(false);
  };

  useEffect(() => {
    //useEffect is used to select a random word from the array and set it as a randomWord state variable.
    const randomChallenge =
      RANDOMWORDS[Math.floor(Math.random() * RANDOMWORDS.length)];
    setRandomWord(randomChallenge);
    setBlanks("+".repeat(randomChallenge.length)); //the .repeat() method is used to set the initial value of blanks as a string of (+) with the same length as the selected word.
  }, []);

  // a renderBlanks function that splits the blanks string into an array of characters using .split('')
  // We then use array.map() to iterate over each character and return a <span> element for each character.
  //The key prop is set to the index of each character to ensure each key is different.

  const renderBlanks = () => {
    return blanks.split("").map((char, index) => (
      <span key={index} className="blank-letter">
        {char}
      </span>
    ));
  };
  // The renderHangmanImage function returns the appropriate Hangman image based on the number of incorrect guesses (incorrectGuesses).
  const renderHangmanImage = () => {
    //images are stored in an array called "images"
    const images = [
      state1,
      state2,
      state3,
      state4,
      state5,
      state6,
      state7,
      state8,
      state9,
      state10,
      state11,
    ];
    return (
      //the corresponding image is selected using the incorrectGuesses variable.
      <Image
        src={images[incorrectGuesses]}
        alt={incorrectGuesses}
        className="hangman-image"
      />
    );
  };

  return (
    //The Container, Row, and Col components from React-Bootstrap are used to create a responsive layout.
    <Container className="hangman-container">
      <Row className="hangman-row">
        <Col className="hangman-col">
          {/*The renderHangmanImage function is called to display the Hangman image.
        a conditional statement, if user fails ,display gameover and a complete hangman image including the correct mystry word ,
         if the user wins,display  'congratulation' and a dancing image.   */}
          <div className="hangman-image-container">{renderHangmanImage()}</div>
          {gameOver ? (
            <div className="text-center">
              <img src={state11} alt="fail_img" />
              <h3>Game Over! The word was: {randomWord}</h3>
              <Button variant="primary" onClick={restartGame}>
                Restart
              </Button>
            </div>
          ) : winner ? (
            <div className="text-center">
              <img src={dance} alt="win_img" />
              <h3>Congratulations! You won!</h3>
              <Button variant="primary" onClick={restartGame}>
                Restart
              </Button>
            </div>
          ) : (
            <div className="text-center mt-4">
              <div className="blanks">
                <h3>{renderBlanks()}</h3>
              </div>
              {/* */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formLetter">
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="Enter a letter"
                    value={letter}
                    onChange={handleLetterChange}
                    maxLength={1}
                  />
                </Form.Group>
                <Button color="primary" type="submit">
                  Guess
                </Button>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Hangman;
