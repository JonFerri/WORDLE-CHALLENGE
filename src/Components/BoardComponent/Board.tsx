import React, { useState, useContext, useEffect, useCallback } from "react";
import WordleContext from "../../Context/WordleContext";
import Guess from '../GuessComponent/Guess'
import HiddenInput from "../HiddenInput/HiddenInput";


type BoardTypes = {}

const Board: React.FunctionComponent<BoardTypes> = () => {
  
  const [guessNumber, setGuessNumber] = useState<number>(0);

  const { inputText, setInputFocus, inputRef } = useContext(WordleContext);

  

  const guesses = Array(6).fill(null);
  

  // Functions
  function inputGetsFocus(input: HTMLInputElement | null) {
    input?.focus();
    setInputFocus(true);
  }
  const incrementGuessNumber = useCallback(()=>{
    setGuessNumber(prevGuessNumber=> prevGuessNumber + 1)
  }, [setGuessNumber])

  useEffect(()=>{
    if(inputText.length === 5) incrementGuessNumber()
  }, [inputText, incrementGuessNumber])

  return (
    
    <div className='game-container' onClick={() => inputGetsFocus(inputRef.current)}>
      <HiddenInput />
      <div className="guesses-container">
          {guesses.map((guess, j) => {
            return (
              <Guess guessIndex={j} key={j} guessNumber={guessNumber} />
            );
          })}
      </div>
    </div>
  );
};

export default Board;
