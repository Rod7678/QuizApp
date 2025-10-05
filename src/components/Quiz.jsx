import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompeteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer =  useCallback( function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer]}
        );
    },[])
    // console.log(userAnswers);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null) ,[handleSelectAnswer])

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompeteImg} alt="Trophy Icon" />
                <h2>Quiz is complete</h2>
            </div>
        )
    }
    
    return (
        <div id="quiz">
            <Question
             key={activeQuestionIndex}
             index={activeQuestionIndex}
             onSelectAnswer={handleSelectAnswer}
             onSkipAnswer={handleSkipAnswer}
            />
        </div>
        
    );
}