import React, { useState, useEffect, useRef } from "react";
import words from "../Resources/words";

type WordleContextType = {
  word: string
  setWord: React.Dispatch<React.SetStateAction<string>> | null
  inputFocus: boolean | null
  setInputFocus: React.Dispatch<React.SetStateAction<boolean | null>>
  inputText: string
  updateInputText: React.Dispatch<React.SetStateAction<string>>
  numOfGuesses: number
  setNumOfGuesses: React.Dispatch<React.SetStateAction<number>>
  inputRef: React.RefObject<HTMLInputElement>
};

const WordleContext = React.createContext<WordleContextType>({} as WordleContextType);

type Props = {
  children: React.ReactNode;
};
export const WordleContextProvider = ({ children }: Props) => {
  //Hooks
  const [word, setWord] = useState<string>("");
  const [inputFocus, setInputFocus] = useState<boolean | null>(null);
  const [numOfGuesses, setNumOfGuesses] = useState<number>(6);
  const [inputText, updateInputText] = useState<string>("");
  
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <WordleContext.Provider
      value={{
        word,
        setWord,
        inputFocus,
        setInputFocus,
        numOfGuesses,
        setNumOfGuesses,
        inputText,
        updateInputText,
        inputRef
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export default WordleContext;
