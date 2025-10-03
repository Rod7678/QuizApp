import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompeteImg from "../assets/quiz-complete.png";


export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer]}
        );
        console.log(userAnswers);
    }

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompeteImg} alt="Trophy Icon" />
                <h2>Quiz is complete</h2>
            </div>
        )
    }
    
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; 
    shuffledAnswers.sort(()=> Math.random() - 0.5);


    return (
        <div id="quiz">
            <div id="questions">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer)=>(
                    <li key={answer} className="answer">
                        <button onClick={()=>handleSelectAnswer(answer)}>
                           {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
    );
}