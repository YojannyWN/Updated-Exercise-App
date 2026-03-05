import { useEffect, useRef, useState } from "react"

function pad2(n) {
  return String(n).padStart(2, "0")
}

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [running])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  const handleStart = () => setRunning(true)
  const handleStop = () => setRunning(false)
  const handleReset = () => {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <div>

      <p style={{ fontSize: "28px" }}>
        Time: {pad2(mins)}:{pad2(secs)}
      </p>

      {!running ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}

      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  )
}