import Header from "./Header";
import { useState } from "react";
import FeedbackStats from "./FeedbackStats";
import "./App.css";
import Button from "./Button";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  return (
    <>
      <Header name={"Give feedback"} />

      <Button handleClick={() => handleFeedback("good")} text="Good" />

      <Button handleClick={() => handleFeedback("neutral")} text="Neutral" />

      <Button handleClick={() => handleFeedback("bad")} text={"Bad"} />

      <Header name={"Statistics"} />

      <FeedbackStats feedback={feedback} />
    </>
  );
};

export default App;
