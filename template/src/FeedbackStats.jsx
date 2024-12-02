import StatisticsLine from "./StatisticsLine";

const FeedbackStats = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const average = total ? (good + neutral + bad) / 3 : 0;
  const positive = total ? (good / total) * 100 : 0;

  return (
    <>
      {total > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Feedback</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <StatisticsLine text="Good" value={good} />
              <StatisticsLine text="Neutral" value={neutral} />
              <StatisticsLine text="Bad" value={bad} />
              <StatisticsLine text="Total" value={total} />
              <StatisticsLine text="Average" value={average.toFixed(2)} />
              <StatisticsLine text="Positive" value={`${positive.toFixed(2)}%`} />
            </tbody>
          </table>
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