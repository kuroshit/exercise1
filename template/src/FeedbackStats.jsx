import StatisticsLine from "./StatisticsLine";

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
            <StatisticsLine text={"Good"} value={good} />
            <StatisticsLine text={"Neutral"} value={neutral} />
            <StatisticsLine text={"Bad"} value={bad} />
          </div>

          <div className="feedback-stats">
            <StatisticsLine text={"Total:"} value={total} />
            <StatisticsLine text={"Average:"} value={average.toFixed(2)} />
            <StatisticsLine text={"Positive:"} value={`${positive.toFixed(2)}%`} />
          </div>
        </div>
      ) : (
        <div>
          <p>No feedback given</p>
        </div>
      )}
    </>
  );
};

export default FeedbackStats;
