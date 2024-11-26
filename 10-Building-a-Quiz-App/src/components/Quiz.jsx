import QUESTIONS from "../question.js";
import { useState, useCallback } from "react";
import QuestionProgress from "./QuestionProgress.jsx";
import quizComplete from "../assets/quiz-complete.png";

export default function Quiz() {

  const [answerState, setAnswerState] = useState('')
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length -1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });

    setTimeout( () => {
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong')
      }

      setTimeout( () => {
        setAnswerState('')
      }, 2000)
    }, 1000)
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="quiz complete logo" />
        <h2> Quiz Complete!!!</h2>
      </div>
    );
  }

  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionProgress key={activeQuestionIndex} timer={10000} onTimeOut={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer) => {
            const isSelected = userAnswer[userAnswer.length - 1] === answer;
            let cssClass = '';

            if(answerState === 'answered' && isSelected) {
              cssClass = 'selected';
            }

            if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
              cssClass = answerState;
            }

                return <li key={answer} className="answer">
                  <button className={cssClass} onClick={() => handleSelectAnswer(answer)}>
                    {answer}
                  </button>
                </li>
              }
          )}
        </ul>
      </div>
    </div>
  );
}
