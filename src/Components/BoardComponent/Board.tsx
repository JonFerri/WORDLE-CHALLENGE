import React, { useState, useContext, useEffect, useCallback } from "react";
import WordleContext from "../../Context/WordleContext";
import GuessPanel from '../GuessPanelComponent/GuessPanel'
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
      <GuessPanel guesses={guesses} guessNumber={guessNumber}/>
    </div>
  );
};

export default Board;
