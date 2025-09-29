import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import GameSelection from '../components/GameSelection';
import MathFacts from '../components/math-facts/MathFacts';
import AnagramHunt from '../components/anagram-hunt/AnagramHunt';
import Game from '../components/anagram-hunt/Game';
import Game2 from '../components/math-facts/Game2';
function App() {
const [operation, setOperation] = useState('+');
  const [maxNumber, setMaxNumber] = useState(10);

  console.log("El estado actual en App.jsx es:", operation);
  return (
    <Routes>
      <Route path='/' element={<GameSelection/>}/>
        <Route 
        path='/math-facts' 
        element={
          <MathFacts 
            operation={operation}
            setOperation={setOperation}
            maxNumber={maxNumber}
            setMaxNumber={setMaxNumber}
          />
        }
      />
      <Route path='/anagram-hunt' element={<AnagramHunt/>}/>

     <Route path='/anagram-hunt/play/:length' element={<Game />} />

      <Route path='/math-facts/play' element={<Game2 
      operation={operation}
      maxNumber={maxNumber}/>}/>
    </Routes>
    
  )
}

export default App
