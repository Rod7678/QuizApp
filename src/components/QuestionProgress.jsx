import { useEffect, useState } from "react"

export default function QuestionProgress({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()=>{
        setTimeout(onTimeout, timeout);
    },[onTimeout, timeout])

    useEffect(()=>{
       const progress =  setInterval(()=>{
        setRemainingTime((prevTime)=> prevTime -100);
       }, 100);

       return ()=>{
        clearInterval(progress);
       }
    }, [])

    return <progress id="question-time" value={remainingTime} max={timeout}/>
}