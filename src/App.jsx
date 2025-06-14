import { useState } from "react";
import { languages } from "./language.js";
import "./App.css";
import { nanoid } from "nanoid";
import { clsx } from "clsx";
import { getFarewellText } from "./utils.js"
import { words } from './word.js'
import  Confetti  from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetter, setGuessedLetter] = useState([]);

  //derived values
  const wrongGuessCount = guessedLetter.filter(
    (l) => !currentWord.includes(l)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((l) => guessedLetter.includes(l));
  const isGameLost = wrongGuessCount > languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const lastGuessLetter = guessedLetter[guessedLetter.length - 1];
  const isLastGuessIncorrect = lastGuessLetter && !currentWord.includes(lastGuessLetter);

  
  const gameStatusClass = clsx("game-status", {
    lost: isGameLost,
    won: isGameWon,
    farewell: isLastGuessIncorrect && !isGameOver,
  });


  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(l) {
    setGuessedLetter((pl) => (pl.includes(l) ? pl : [...pl, l]));
  }

  
  const languageElements = languages.map((lan, index) => {
    const styles = {
      backgroundColor: lan.backgroundColor,
      color: lan.color,
    };
    const isLost = wrongGuessCount > index;
    const className = clsx("chip", isLost && "lost");
    return (
      <span key={lan.name} style={styles} className={className}>
        {lan.name}
      </span>
    );
  });

  const key = nanoid();
  const letterElements = currentWord.split("").map((l, key) => {
    const shouldRevealLetter = isGameLost || guessedLetter.includes(l);
    const letterClassName = clsx(isGameLost && !guessedLetter.includes(l) && "missed-letter");
    return (
      <span key={key} className={letterClassName}>{shouldRevealLetter ? l.toUpperCase() : ""}</span>
    );
  });

  const keyboardElemnts = alphabet.split("").map((l, index) => {
    const isGuessed = guessedLetter.includes(l);
    const iscorrect = isGuessed && currentWord.includes(l);
    const isWrong = isGuessed && !currentWord.includes(l);

    const className = clsx({
      correct: iscorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={index}
        disabled = {isGameOver}
        onClick={() => addGuessedLetter(l)}
      >
        {l.toUpperCase()}
      </button>
    );
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return <p className="farewell-message">
        {getFarewellText(languages[wrongGuessCount -1].name)}
      </p>;
    }
      if (isGameWon) {
        return(
          <>
          <h2>You win!</h2>
          <p>Well done 💐</p>
          </>
        )
      }
      if(isGameLost) {
        return(
          <>
          <h2>Game Over!</h2>
          <p>Try learning assembly first to get it done!</p>
          </>
        )
      }
  }

  return (
    <main>
      {
        isGameWon &&
        <Confetti
          recycle={false}
          numberOfPieces = {1000}
        />
      }
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className={gameStatusClass}>
        {renderGameStatus()}
      </section>

      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElemnts}</section>
      {isGameOver && <button className="new-game"
        onClick={() => window.location.reload()}
      > New Game</button>}
    </main>
  );
}

export default App;
