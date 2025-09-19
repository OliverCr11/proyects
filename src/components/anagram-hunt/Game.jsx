import React, { useState } from "react";

import InputText from "./InputText";
import Score from "./Score";
import Timer from "./Timer";
import { useParams } from "react-router-dom";

const Game = () =>{
    const [userInput,setUserInput]=useState('');
    const {legth} = useParams();
    return(
       <div>
        <h1>Anagram Hunt</h1>
        <Score/>
        <Timer/>
        <InputText/>

       </div>
    )
}
export default Game;