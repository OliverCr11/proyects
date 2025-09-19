import React from "react";
import { useState } from "react";

import WordLegthInput from "./WordLengthInput";
import AnagramInstructions from "./AnagramIntructions";
import PlayButton from "./PlayButton";
const AnagramHunt = () =>{
    const[wordLength,setWordLegth]=useState(5);
    return(
        <div className="container text-center" style={{maxWidth:'500px'}}>
            <h1 className="my-4">Anagram Hunt</h1>
            <WordLegthInput
            wordLength={wordLength}
            setWordLegth={setWordLegth}/>
            <AnagramInstructions/>
             <PlayButton to={`/anagram-hunt/play/${wordLength}`} />
        </div>
    )
}

export default AnagramHunt;