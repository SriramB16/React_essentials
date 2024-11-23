import QUESTIONS from '../question.js';
import { useState } from "react";
import QuestionProgress from "./QuestionProgress.jsx";
import quizComplete from '../assets/quiz-complete.png'

export default function Quiz () {
    const [userAnswer, setUserAnswer] = useState([]);
    
    const activeQuestionIndex = userAnswer.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer]
        })
    }

    if(quizIsComplete){
        return (
            <div id='summary'>
                <img src={quizComplete} alt='quiz complete logo'/>
                <h2> Quiz Complete!!!</h2>
            </div>
        )
    }

    const shuffledAnswer =[...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswer.sort(() => Math.random() - 0.5)
    
    return(
        <div id='quiz'>
            <div id='question'>
                <QuestionProgress timer={10000} onTimeOut={() => handleSelectAnswer(null)}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswer.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}