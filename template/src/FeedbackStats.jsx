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
          <table>
            <thead>
              <tr>
                <th>Feedback</th>
                <th>Count</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td>Good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>Bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{average.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>{`${positive.toFixed(2)}%`}</td>
              </tr>
            </tbody>
          </table>
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
