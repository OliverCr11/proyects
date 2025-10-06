import React from "react";
import { useState } from "react";

import WordLengthInput from "./WordLengthInput";
import Instructions from "./Instructions";
import PlayButton from "./PlayButton";
import Button from "../shared/Button";
const AnagramHunt = () =>{
    const[wordLength,setWordLength]=useState(5);
    return(
        <div className="container text-center" style={{maxWidth:'500px'}}>
            <h1 className="my-4">Anagram Hunt</h1>
            <WordLengthInput
            wordLength={wordLength}
            setWordLength={setWordLength}/>
            <Instructions/>
            <Button to={`/anagram-hunt/play/${wordLength}`} />
        </div>
    )
}

export default AnagramHunt;