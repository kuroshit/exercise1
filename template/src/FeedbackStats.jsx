const FeedbackStats = ({ feedback }) => {
  const {good, neutral, bad} = feedback;
  const total = good + neutral + bad;
  const average = (good + neutral + bad) / 3
  const positive = good / (good + neutral + bad) * 100
  return (
    <>
      <div className="feedback-numbers">
        <div>Good {good}</div>
        <div>Neutral {neutral}</div>
        <div>Bad {bad}</div>
      </div>

      <div>
        <div className="feedback-stats">
          Total: {total}
        </div>
        <div>
          Average:{" "} {average.toFixed(2)}
        </div>
        <div>
          Positive:{" "} {positive.toFixed(2)}%
        </div>
      </div>
    </>
  );
};

export default FeedbackStats;
