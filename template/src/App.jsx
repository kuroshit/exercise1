import Header from "./Header";
import { useState } from "react";
import FeedbackStats from "./FeedbackStats";
import "./App.css";
import Button from "./Button";
import Anecdote from "./Anecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [anecdote, setAnecdote] = useState(0);

  const handleAnecdote = () => {
    setAnecdote(Math.floor(Math.random() * anecdotes.length));
  }

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

      <Anecdote anecdote={anecdotes[anecdote]} />

      <Button handleClick={handleAnecdote} text="Next anecdote" />
    </>
  );
};

export default App;
