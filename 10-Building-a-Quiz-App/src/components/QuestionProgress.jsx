import { useState, useEffect } from "react";

export default function QuestionProgress({ timer, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeOut = setTimeout(onTimeOut, timer);

    return () => {
      clearTimeout(timeOut)
    }

  }, [onTimeOut, timer]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(timeInterval)
    }
  }, []);

  return <progress id="question-time" max={timer} value={remainingTime}/>;
}
