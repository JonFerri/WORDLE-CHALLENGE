import { useContext } from "react";
import WordleContext from "../../Context/WordleContext";
import CursorProps from "./Cursor.types";

const Cursor = ({ position, guess, guessNumber, guessIndex }: CursorProps) => {
  const { inputFocus } = useContext(WordleContext);
  return position === guess.length &&
    guessNumber === guessIndex &&
    inputFocus ? (
    <div className="cursor"></div>
  ) : (
    <></>
  );
};

export default Cursor;
