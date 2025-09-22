import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InputText from "./InputText";
import Score from "./Score";
import Timer from "./Timer";
import AnagramData from "./AnagramData";
const Game = () =>{
    const {length} =useParams();
    const [word,setWord]=useState('');
    const [solutions,setSolutions]=useState();
    const [userInput,setUserInput]=useState('');
 
    return(
       <div>
        <h1>Anagram Hunt</h1>
        <Score/>
        <Timer/>
        <InputText
        userInput={userInput}
        setUserInput={setUserInput}
        />

       </div>
    )
}
export default Game;