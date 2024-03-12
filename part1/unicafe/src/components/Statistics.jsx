import React from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  const average = () => {
    if (all === 0) {
      return 0;
    } else {
      return ((good - bad) / all) * 100;
    }
  };

  const positiveRatio = () => {
    if (all === 0) {
      return 0;
    } else {
      const data = (good / all) * 100;
      return data;
    }
  };

  if (all === 0) {
    return <h2>No feedback given</h2>;
  }
  return (
    <>
    
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="Average" value={average().toFixed(2) + "%"} />
      <StatisticsLine text="Positive" value={positiveRatio().toFixed(2) + "%"}
      />
    </>
  );
};
export default Statistics;
