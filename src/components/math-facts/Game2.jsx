import React, {useState } from "react";

import Score from "./Score";
import Timer from "./Timer";

const Game = () =>{
    const gameLength =30;
    const [timerLeft,setTimeLeft]=useState(gameLength);
    
    return(
        <div>
            <h1>Math Facts</h1>
            
            <Timer timeLeft={timerLeft} setTimeLeft={setTimeLeft}/>
            <Score/>

        </div>
    )
}
export default Game;