import { useState } from "react";
import Buttons from "./components/Buttons";
import Statistics from "./components/Statistics";
import StatisticsLine from "./components/StatisticsLine";



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      
      <h1>give feedback</h1>
      <Buttons  setGood={setGood} setNeutral={setNeutral}  setBad={setBad} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

export default App;
