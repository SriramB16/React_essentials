import { useState, useEffect } from "react";

export default function QuestionProgress({ timer, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    setTimeout(onTimeOut, timer);
  }, [onTimeOut, timer]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timer} value={remainingTime}/>;
}
