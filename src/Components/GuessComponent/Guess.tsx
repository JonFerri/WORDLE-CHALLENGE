import React from "react";
import Box from "../BoxComponent/Box";

//Props types
type GuessProps = {
  guessIndex: number;
  guessNumber: number;
};

//component Guess. It'll match one of the 6 guesses we are allowed to make.
const Guess: React.FunctionComponent<GuessProps> = ({ guessIndex, guessNumber }) => {
  
  const guessLength = Array(5).fill(null);

  return (
    <div className='guess'>
      {guessLength.map((box, i) => {
        return <Box position={i} guessIndex={guessIndex} key={i} guessNumber={guessNumber} />;
      })}
    </div>
  );
};

export default Guess;
