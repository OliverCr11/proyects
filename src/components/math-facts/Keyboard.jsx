import {useEffect} from 'react';

function Keyboard({setUserAnswer}) {
  
  useEffect(() => {
    const handleKeyUp = (e) => {
      e.preventDefault();
      if (e.key === ' ' || e.key === 'Enter') { 
        setUserAnswer('');
      } else if (e.key === 'Backspace') {
        setUserAnswer(prevUserAnswer =>
          prevUserAnswer.substring(0, prevUserAnswer.length - 1));
      } else if (!isNaN(e.key)) {
        setUserAnswer(prevUserAnswer =>
          String(Number(prevUserAnswer + e.key)));
      }
    }
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []); 
  return null;
}
export default Keyboard;