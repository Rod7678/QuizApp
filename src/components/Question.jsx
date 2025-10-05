import Answers from "./Answers.jsx";
import QuestionProgress from "./QuestionProgress.jsx"

export default function Question({
    questionText,
    answers,
    answerState,
    selectedAnswer,
    onSelectAnswer,
    onSkipAnswer
}){
    return (
        <div id="questions">
            <QuestionProgress
             timeout={10000}
             onTimeout={onSkipAnswer}
            />
            <h2>{questionText}</h2>
            <Answers
             answers={answers}
             selectedAnswer={selectedAnswer}
             answerState={answerState}
             handleSelectAnswer={onSelectAnswer}/>
        </div>
    );
}