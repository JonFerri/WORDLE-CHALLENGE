import React, {useCallback, useContext, useEffect, useState} from 'react'
import WordleContext from '../../Context/WordleContext'

type LetterProps = {
    guessIndex: number
    guessNumber: number
    boxLetter: string
}

const Letter : React.FunctionComponent<LetterProps> = ({ guessIndex, guessNumber, boxLetter}) => {
    
    const [letter, setLetter] = useState("");
    const { inputText, updateInputText } = useContext(WordleContext)
    

    const resetInputText = useCallback(()=>{
        if(inputText.length === 5) updateInputText("")
    },[inputText,updateInputText])
    
    useEffect(()=>{
        if(guessIndex === guessNumber){
            setLetter(boxLetter)   
            resetInputText() 
        }
        
    },[boxLetter, guessIndex, guessNumber,resetInputText])

    


    return <span>{letter.toUpperCase()}</span>
}

export default Letter