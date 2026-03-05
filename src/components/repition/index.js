import { useState } from "react"

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0)

  return (
    <div>

      <p style={{ fontSize: "24px" }}>Reps: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>+1 Rep</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  )
}