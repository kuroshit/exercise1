import Header from "./Header";
import { useState } from "react";
import FeedbackStats from "./FeedbackStats";
import "./App.css";

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

      <button
        className="feedback-button"
        onClick={() => handleFeedback("good")}
      >
        Good
      </button>
      <button
        className="feedback-button"
        onClick={() => handleFeedback("neutral")}
      >
        Neutral
      </button>
      <button className="feedback-button" onClick={() => handleFeedback("bad")}>
        Bad
      </button>

      <Header name={"Statistics"} />

      <FeedbackStats feedback={feedback} />
    </>
  );
};

export default App;
