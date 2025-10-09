import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Score from "../shared/Score";
import Timer from "../shared/Timer";
import ClearButton from "./ClearButton";
import NumberButton from "./NumberButton";
import Keyboard from "./Keyboard";
import Equation from "./Equation";

import './Game2.css';
import { randInt } from "./helpers/helpers";

  function getRandNumbers(operator, low, high) {
    let num1 = randInt(low, high);
    let num2 = randInt(low, high);
    const numHigh = Math.max(num1, num2);
    const numLow = Math.min(num1, num2);

    if (operator === '-') {
      num1 = numHigh;
      num2 = numLow;
    }

    if (operator === '/') {
      if (num2 === 0) {
        num2 = randInt(1, high);
      }
      num1 = (num1 * num2);
    }
    return { num1, num2 };
  }
const Game2 = ({ operation, maxNumber }) => {

  const [operands, setOperands] = useState(() => getRandNumbers(operation, 0, maxNumber));
  const question = operands.num1 + ' ' + operation + ' ' + operands.num2;
  const [answered, setAnswered] = useState(false);
  const gameLength = 30;
  const [timerLeft, setTimeLeft] = useState(gameLength);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  
    const newQuestion = () => {
    setUserAnswer('');
    setAnswered(false);
    setOperands(getRandNumbers(operation, 0, maxNumber));
  }

  const restart = () => {
    setTimeLeft(gameLength);
    setScore(0);
    newQuestion();
  }


  const operationNames = {
    '+': 'Addition',
    '-': 'Subtraction',
    'x': 'Multiplication',
    '/': 'Division'
  };
  const operationNameToShow = operationNames[operation];

  const appendToAnswer = (num) => {
    setUserAnswer(String(Number(userAnswer + num)));
  }

  useEffect(() => {

    if (!userAnswer || answered) return;

    function checkAnswer(userAnswer) {
      if (isNaN(userAnswer)) return false;
      let correctAnswer;
      switch (operation) {
        case '+': correctAnswer = operands.num1 + operands.num2; break;
        case '-': correctAnswer = operands.num1 - operands.num2; break;
        case 'x': correctAnswer = operands.num1 * operands.num2; break;
        default: correctAnswer = operands.num1 / operands.num2; break;
      };
      return (parseInt(userAnswer) === correctAnswer);
    }

    if (checkAnswer(userAnswer)) {
      setAnswered(true);
      setScore(score + 1);
      setTimeout(newQuestion, 300);
    }

  }, [userAnswer, answered, score, operation, operands]); 


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberButtons = numbers.map((number) =>
    <NumberButton value={number} key={number}
      handleClick={appendToAnswer} />
  );
  
  const equationClass = answered
    ? 'row my-2 text-primary fade'
    : 'row my-2 text-secondary';

  if (timerLeft === 0) {
    return (
      <div className="text-center" id="game-container">
        <h1>Math Facts</h1>
        <h2>{operationNameToShow}</h2>
        <h3>Time's up!</h3>
        <strong style={{ fontSize: "1.5em" }}>Your Final score is:</strong>
        <div style={{ fontSize: "1.5em" }}>{score}</div>
        <button className="btn btn-primary form-control m-1" onClick={restart}>Play Again</button>
        <Link className="btn btn-secondary form control m-1" to={'/'}>
          Back to Start Screen
        </Link>
      </div>
    )
  }

  return (
    <div className="text-center" id="game-container">
      <h1>Math Facts</h1>
      <h2>{operationNameToShow}</h2>
      <div className={equationClass} id="equation">
        <Equation question={question} answer={userAnswer} />
      </div>
      <div className="row " id="buttons">
        <div className="col">
          {numberButtons}
          <ClearButton handleClick={() => setUserAnswer('')} />
        </div>
      </div>
      <Keyboard setUserAnswer={setUserAnswer} />
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
        <Score score={score} />
        <Timer timeLeft={timerLeft} setTimeLeft={setTimeLeft} />
      </div>
    </div>
  )
}
export default Game2;