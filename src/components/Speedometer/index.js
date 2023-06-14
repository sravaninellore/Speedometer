import React, {useState} from 'react'
import './index.css'

const Speedometer = () => {
  const [speed, setSpeed] = useState(0)

  const handleAccelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10)
    }
  }

  const handleApplyBrake = () => {
    if (speed > 0) {
      setSpeed(speed - 10)
    }
  }

  return (
    <div className="speedometer">
      <h1>Speedometer</h1>
      <h2>Speed is {speed}mph</h2>
      <p>Min Limit is 0mph, Max Limit is 200mph</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        alt="speedometer"
        className="speedometer-image"
      />
      <div className="buttons">
        <button className="accelerate-button" onClick={handleAccelerate}>
          Accelerate
        </button>
        <button className="brake-button" onClick={handleApplyBrake}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
