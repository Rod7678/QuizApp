import { useEffect, useState } from "react"

export default function QuestionProgress({timeout, onTimeout, mode}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()=>{
        const timer =  setTimeout(onTimeout, timeout);

        return ()=> {
            clearTimeout(timer)
        }

    },[onTimeout, timeout])
    
    useEffect(()=>{
        const interval =  setInterval(()=>{
        setRemainingTime((prevTime)=> prevTime -100);
       }, 100);

       return ()=>{
        clearInterval(interval);
       }
    }, [])

    return <progress id="question-time" value={remainingTime} max={timeout} className={mode}/>
}