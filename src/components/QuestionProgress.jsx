import { useEffect, useState } from "react"

export default function QuestionProgress({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()=>{
        console.log('set Timeout');
        const timer =  setTimeout(onTimeout, timeout);

        return ()=> {
            clearTimeout(timer)
        }

    },[onTimeout, timeout])
    
    useEffect(()=>{
        console.log('set Interval');
        const interval =  setInterval(()=>{
        setRemainingTime((prevTime)=> prevTime -100);
       }, 100);

       return ()=>{
        clearInterval(interval);
       }
    }, [])

    return <progress id="question-time" value={remainingTime} max={timeout}/>
}