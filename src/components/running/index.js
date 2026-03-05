import React, { useState } from "react"

export default function RunningExercise({ exerciseName }) {
  const [laps, setLaps] = useState([])

  const recordLap = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString()
    setLaps((prevLaps) => [timeString, ...prevLaps])
  }

  const clearLaps = () => setLaps([])

  return (
    <div className="exercise-screen">
      <h2>{exerciseName || "Running"}</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <button onClick={recordLap}>Record Lap</button>
        <button onClick={clearLaps} disabled={laps.length === 0}>
          Clear Laps
        </button>
      </div>

      <h3>Laps</h3>

      {laps.length === 0 ? (
        <p>No laps yet. Press “Record Lap”.</p>
      ) : (
        <ol>
          {laps.map((lapTime, index) => (
            <li key={`${lapTime}-${index}`}>{lapTime}</li>
          ))}
        </ol>
      )}
    </div>
  )
}