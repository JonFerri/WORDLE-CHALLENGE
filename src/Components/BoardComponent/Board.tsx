import React, { useState, useRef, useContext, useEffect, useCallback } from "react";
import WordleContext from "../../Context/WordleContext";
import Guess from '../GuessComponent/Guess'


type BoardTypes = {}

const Board: React.FunctionComponent<BoardTypes> = () => {
  
  const [guessNumber, setGuessNumber] = useState<number>(0);

  const { inputText, updateInputText, setInputFocus } = useContext(WordleContext);

  const inputRef = useRef<HTMLInputElement>(null);

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
            
      <div className="input-container">
        <input
            ref={inputRef}
            onChange={(e) => updateInputText(e.target.value)}
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            maxLength={5}
            value={inputText}
        ></input>
      </div>
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
