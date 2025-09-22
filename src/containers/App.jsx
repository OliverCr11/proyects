import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import GameSelection from '../components/GameSelection';
import MathFacts from '../components/math-facts/MathFacts';
import AnagramHunt from '../components/anagram-hunt/AnagramHunt';
import Game from '../components/anagram-hunt/Game';
function App() {
const [operation, setOperation] = useState('+');
  const [maxNumber, setMaxNumber] = useState(10);
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

             <Route path='/anagram-hunt/play/:length' element={<h1>¡Página del juego Anagram Hunt!</h1>} />
    </Routes>
    
  )
}

export default App
