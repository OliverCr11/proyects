import React, {useState } from "react";
import Score from "./Score";
import Timer from "./Timer";
import ClearButton from "./ClearButton";
import NumberButton from "./NumberButton";
import SelectInput from "./SelectInput";
import Keyboard from "./Keyboard";
import Equation from "./Equation";
import './Game2.css';
const Game2 = ({ operation}) =>{
    const gameLength =30;
    const [timerLeft,setTimeLeft]=useState(gameLength);
    const [userAnswer,setUserAnswer]=useState('');
    const operationNames = {
  '+': 'Addition',
  '-': 'Subtraction',
  'x': 'Multiplication',
  '/': 'Division'
};
const appendToAnswer = (num) =>{
    setUserAnswer(String(Number(userAnswer+num)));
}
    const numbers =[1,2,3,4,5,6,7,8,9,0];
    const numberButtons=numbers.map((number)=>
    <NumberButton value={number} key={number}
    handleClick={appendToAnswer} />
);


const operationNameToShow=operationNames[operation];

    return(
        <div>
            <h1>Math Facts</h1>
            <h2>{operationNameToShow}</h2>
            <div className="row" id="buttons">
                <div className="col">
                    {numberButtons}
                </div>
                <ClearButton handleClick={setUserAnswer}/>
            </div>
            <Keyboard setUserAnswer={setUserAnswer} />
            <Timer timeLeft={timerLeft} setTimeLeft={setTimeLeft}/>
            <Score/>

        </div>
    )
}
export default Game2;