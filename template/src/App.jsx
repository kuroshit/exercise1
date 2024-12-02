import Header from "./Header";
import { useState } from "react";
import FeedbackStats from "./FeedbackStats";
import "./App.css";
import Button from "./Button";
import Anecdote from "./Anecdote";

const App = () => {
  const initialAnecdotes = [
    { text: "If it hurts, do it more often.", votes: 0 },
    { text: "Adding manpower to a late software project makes it later!", votes: 0},
    { text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", votes: 0 },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", votes: 0 },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    { text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", votes: 0 },
    { text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients", votes: 0 },
    { text: "The only way to go fast, is to go well.", votes: 0 },
  ];

  const [currentAnecdote, setCurrentAnecdote] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);

  const handleAnecdoteVote = () => {
    const updatedAnecdotes = anecdotes.map((anecdote, index) => 
      index === currentAnecdote ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote
    );
    setAnecdotes(updatedAnecdotes);
  }


  const handleRandomAnecdote = () => {
    setCurrentAnecdote(Math.floor(Math.random() * anecdotes.length));
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

      <Anecdote anecdote={anecdotes[currentAnecdote]} />

      <Button handleClick={handleAnecdoteVote} text="Vote" />

      <Button handleClick={handleRandomAnecdote} text="Next anecdote" />
    </>
  );
};

export default App;
