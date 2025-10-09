import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    const gameLength = 60;
    const [timeLeft, setTimeLeft] = useState(gameLength);
    const [foundSolutions, setFoundSolutions] = useState([]);
    const [score, setScore] = useState(0);
    
    const [playedIndices, setPlayedIndices] = useState([]);
    const [gameWon, setGameWon] = useState(false);


    const startNewRound = () => {
        const wordGroups = AnagramData[length];
        if (!wordGroups) {
            console.error(`There is no word of length: ${length}`);
            return;
        }

        const availableIndices = wordGroups
            .map((_, index) => index)
            .filter(index => !playedIndices.includes(index));

        if (availableIndices.length === 0) {
            setGameWon(true);
            return;
        }

        const randomAvailableIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        
        setPlayedIndices(prev => [...prev, randomAvailableIndex]);
        
        const randomGroup = wordGroups[randomAvailableIndex];
        const mainWord = randomGroup[Math.floor(Math.random() * randomGroup.length)];
        const correctSolutions = randomGroup.filter(w => w !== mainWord);

        setWord(mainWord.toUpperCase());
        setSolutions(correctSolutions);
        setFoundSolutions([]); 
    };

    useEffect(() => {
        startNewRound();
    }, [length]);

    useEffect(() => {
        const currentInputLower = userInput.toLowerCase();
        if (solutions.includes(currentInputLower) && !foundSolutions.includes(currentInputLower)) {
            
            const newFoundSolutions = [...foundSolutions, currentInputLower];
            setFoundSolutions(newFoundSolutions);
            setScore(prevScore => prevScore + 1);
            setUserInput('');

            if (newFoundSolutions.length === solutions.length) {
                setTimeout(() => {
                    startNewRound();
                }, 1000);
            }
        }
    }, [userInput, solutions, foundSolutions]);

    const restart = () => {
        setTimeLeft(gameLength);
        setScore(0);
        setPlayedIndices([]);
        setGameWon(false);
        startNewRound();
    };

    if (gameWon) {
        return (
            <div>
                <h1><strong>Anagram Hunt</strong></h1>
                <strong>¡Felicidades!</strong>
                <p>Has resuelto todos los anagramas de longitud {length}.</p>
                <Score score={score} />
                <button className="btn btn-primary form-control m-1" onClick={restart}>Jugar de Nuevo</button>
                <Link className="btn btn-secondary form-control m-1" to={'/'}>
                    Volver al Menú
                </Link>
            </div>
        );
    }
    if (timeLeft === 0) {
        return (
            <div>
                <h1><strong>Anagram Hunt</strong></h1>
                <strong>Time's Up!</strong>
                <p>You got</p>
                <Score score={score} />
                <p>Anagrams</p>
                <button className="btn btn-primary form-control m-1" onClick={restart}>Play Again</button>
                <Link className="btn btn-secondary form-control m-1" to={'/'}>
                    Back to Start Screen
                </Link>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-11 col-lg-10" >
                    <div className="card text-center p-4 shadow-sm" id="game-container">
                        <h1 className="mb-4">Anagram Hunt</h1>
                        <div className="d-flex justify-content-between">
                            <Score score={score} />
                            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
                        </div>
                        <hr />
                        <div className="my-4">
                            <h3>{word} ({solutions.length - foundSolutions.length} left)</h3>
                        </div>

                        <InputText
                            userInput={userInput}
                            setUserInput={setUserInput}
                        />
                        <div className="mt-4">
                            <ol className="list-unstyled text-start ps-4">
                                {foundSolutions.map((solution, index) => (
                                    <li key={index} className="fs-5">
                                        {index + 1}. {solution}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game2;