import StatisticLine from "./StatisticLine";

function Statistics({ good, neutral, bad, total }) {
  if (!good && !neutral && !bad) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
        <StatisticLine text="positive" value={(good / total) * 100} />
      </tbody>
    </table>
  );
}

export default Statistics;
