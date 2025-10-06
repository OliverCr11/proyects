
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InputText from "./InputText";
import Timer from "../shared/Timer";
import Score from "../shared/Score";
import AnagramData from "./AnagramData";

const Game2 = () => {
    const { length } = useParams();

    const [word, setWord] = useState('');
    const [solutions, setSolutions] = useState([]); 
    const [userInput, setUserInput] = useState('');
    const gameLength = 30;
    const [timeLeft,setTimeLeft]=useState(gameLength);
    const [foundSolutions,setFoundSolutions]=useState([]);
    useEffect(() => {
        const wordGroups = AnagramData[length];
        if (!wordGroups) {

            console.error(`There is no word of length: ${length}`);
            return;
        }
        const randomIndex = Math.floor(Math.random() * wordGroups.length);
        const randomGroup = wordGroups[randomIndex];

        const randomWordIndex = Math.floor(Math.random() * randomGroup.length);
        const mainWord = randomGroup[randomWordIndex];

        const correctSolutions = randomGroup.filter(w => w !== mainWord);
        
        setWord(mainWord.toUpperCase());
        setSolutions(correctSolutions);
    }, [length]);
    
useEffect(() => {
    const currentInputLower = userInput.toLowerCase();
    if (solutions.includes(currentInputLower) && !foundSolutions.includes(currentInputLower)) {
        setFoundSolutions(prevFound => [...prevFound, currentInputLower]);
        setUserInput(''); 
    }

}, [userInput, solutions, foundSolutions]); 

        if( timeLeft === 0 ){
            return(
                <>
                <p>fin</p>
                </>
            )
        }
    return (
       <div>
        <h1>Anagram Hunt</h1>
        <Score score={Score}/>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        <h3>{word} ({solutions.length - foundSolutions.length} left)</h3>
      
      <InputText
        userInput={userInput}
        setUserInput={setUserInput}
    />

      <ol>
        {foundSolutions.map((solution, index) => (
            <li key={index}>{solution}</li>
        ))}
    </ol>
       </div>
    );
};

export default Game2;