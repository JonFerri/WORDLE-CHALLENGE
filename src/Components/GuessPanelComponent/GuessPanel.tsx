import "../../App.css";
import React from "react";
import Guess from '../GuessComponent/Guess' 

type GuessPanelProps = {
    guesses: Array<React.FunctionComponent | null>
    guessNumber: number
}

const GuessPanel = ({guesses, guessNumber}: GuessPanelProps)=> {
    return (
        <div className="guesses-container">
          {guesses.map((guess, j) => {
            return (
              <Guess guessIndex={j} key={j} guessNumber={guessNumber} />
            );
          })}
      </div>
    )
}

export default GuessPanel