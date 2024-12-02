const FeedbackStats = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const average = total ? (good + neutral + bad) / 3 : 0;
  const positive = total ? (good / (good + neutral + bad)) * 100 : 0;

  return (
    <>
      {total > 0 ? (
        <div>
          <div className="feedback-numbers">
            <div>Good {good}</div>
            <div>Neutral {neutral}</div>
            <div>Bad {bad}</div>
          </div>

          <div>
            <div className="feedback-stats">Total: {total}</div>
            <div>Average: {average.toFixed(2)}</div>
            <div>Positive: {positive.toFixed(2)}%</div>
          </div>
        </div>
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

export default FeedbackStats;
