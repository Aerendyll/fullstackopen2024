import React from "react";

function Buttons({ setGood, setNeutral, setBad }) {
  const handleGood = () => {
    setGood(good => good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral => neutral + 1);
  };
  const handleBad = () => {
    setBad(bad => bad + 1);
  };

  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
  );
}

export default Buttons;
