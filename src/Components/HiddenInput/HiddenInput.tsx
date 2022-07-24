import "../../App.css"
import React, { useContext } from 'react'
import WordleContext from "../../Context/WordleContext"

const HiddenInput = ()=> {

    const { updateInputText, setInputFocus, inputRef, inputText } = useContext(WordleContext)

    return (
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
    )
}

export default HiddenInput;