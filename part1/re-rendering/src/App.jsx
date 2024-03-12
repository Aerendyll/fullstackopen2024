import { useState } from "react";
const App = () => {
  const [ counter, setCounter ] = useState(0)


  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={() => setCounter(counter+1)}>
        Plus
      </button>
      <button onClick={() => setCounter(0)}>
        Zero
      </button>
    </div>
  )
}

export default App;
