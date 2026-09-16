import { useState } from "react";
import Statistics from "../unicafe/Statistics";
import Button from "../unicafe/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  const total = good + neutral + bad;

  return (
    <main>
      <h1>give feedback</h1>
      <div>
        <Button onHandleClick={handleClickGood} text="good" />
        <Button onHandleClick={handleClickNeutral} text="neutral" />
        <Button onHandleClick={handleClickBad} text="bad" />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </main>
  );
};

export default App;
