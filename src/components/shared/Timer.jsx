import { useEffect } from "react";
const Timer = ({timeLeft,setTimeLeft}) =>{
    useEffect(()=>{
        const timer =setInterval(() => {
         setTimeLeft(prevTimeLeft => prevTimeLeft -1);   
        }, 1000);
        console.log('starting timer');
        return () =>{
            clearInterval(timer);
            console.log('Cleaning up');
        }
    },[]);
    return(
        <span>
        <strong>Time:{timeLeft}</strong>
        </span>
    )
}
export default Timer;