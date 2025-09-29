
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InputText from "./InputText";
import Score from "./Score";
import Timer from "./Timer";
import AnagramData from "./AnagramData";

const Game2 = () => {
    const { length } = useParams();

    const [word, setWord] = useState('');
    const [solutions, setSolutions] = useState([]); 
    const [userInput, setUserInput] = useState('');
    
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

    return (
       <div>
        <h1>Anagram Hunt</h1>
        <Score />
        <Timer />
        <h3>Find the {solutions.length} anagrams for the word: {word}</h3>
      
        <InputText
            userInput={userInput}
            setUserInput={setUserInput}
        />
       </div>
    );
};

export default Game2;