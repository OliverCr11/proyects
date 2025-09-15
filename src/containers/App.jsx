import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import GameSelection from '../components/GameSelection';
import MathFacts from '../components/MathFacts';
import AnagramHunt from '../components/anagramHunt';
function App() {

  return (
    <Routes>
      <Route path='/games' element={<GameSelection/>}/>
       <Route path='/math-facts' element={<MathFacts/>}/>
      <Route path='/anagram-hunt' element={<AnagramHunt/>}/>
    </Routes>
    
  )
}

export default App
