import "../../App.css";
import { useContext, useEffect, useState } from "react";
import WordleContext from "../../Context/WordleContext";
import Cursor from "../CursorComponent/Cursor";
import handleStyles from "../../Services/handleStyles";

import props from "./Box.types";
import Letter from "../LetterComponent/Letter";

const Box = ({ position, guessIndex, guessNumber }: props) => {
  
  //State for managing styles
  const [styles, setStyles] = useState({})

  //Context variables
  const { inputText, word } = useContext(WordleContext);

  //Effect. It will only run during the correspondant guessNumber. After that
  //the state won't change, and styles will be kept.
  useEffect(()=> {
    if(guessIndex === guessNumber){
      setStyles(handleStyles(inputText, word, position))
    } 
  },[guessIndex, guessNumber, inputText, position, word])

  //letter entered at position
  const boxLetter = inputText.slice(position,position +1) 

  

  return (
    <div className='box' style={guessIndex < guessNumber ? styles : {}}>
      <Letter guessIndex={guessIndex} guessNumber={guessNumber} boxLetter={boxLetter}/>
      <Cursor
        position={position}
        guess={inputText}
        guessNumber={guessNumber}
        guessIndex={guessIndex}
      />
    </div>
  );
};

export default Box;
