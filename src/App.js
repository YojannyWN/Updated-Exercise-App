import { useState } from "react"
import "./App.css"

import RepetitionExercise from "./components/repition"
import DurationExercise from "./components/duration"
import RunningExercise from "./components/running"

function App() {
  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Sit-ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Jump Rope", type: "duration" },
    { name:"Running", type: "running"}
  ]

  const [selected, setSelected] = useState(null)

  if (!selected) {
    return (
      <div className="app">
        <h1>Exercise Menu</h1>

        <div className="menu">
          {exercises.map((ex) => (
            <button
              key={ex.name}
              className="menu-btn"
              onClick={() => setSelected(ex)}
            >
              {ex.name} ({ex.type})
            </button>
          ))}
        </div>
        <p className="hint">Click an exercise to open it.</p>
      </div>
    )
  }

  let exerciseComponent = null
  if (selected.type === "repetition") {
    exerciseComponent = <RepetitionExercise name={selected.name} />
  } else if (selected.type === "duration") {
    exerciseComponent = <DurationExercise name={selected.name} />
  } else if (selected.type === "running"){
    exerciseComponent = <RunningExercise name={selected.name}/>
  }else {
    exerciseComponent = <p>Unknown exercise type.</p>
  }

  return (
    <div className="app">
      {exerciseComponent}

      <button className="back-btn" onClick={() => setSelected(null)}>
        Back to Menu
      </button>
    </div>
  )
}
export default App;