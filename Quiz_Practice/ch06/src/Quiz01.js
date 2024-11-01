import React, { useState, useEffect } from 'react'

const Quiz01 = () => {
   const [seconds, setSeconds] = useState(0)
   const [isRunning, setIsRunning] = useState(false)

   useEffect(() => {
      let timerId
      if (isRunning) {
         timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
         }, 1000)
      }

      return () => {
         clearInterval(timerId)
      }
   }, [isRunning])

   const startTimer = () => {
      setIsRunning(true)
   }

   const stopTimer = () => {
      setIsRunning(false)
   }

   return (
      <div>
         <p>타이머: {seconds} 초</p>
         <button onClick={startTimer} disabled={isRunning}>
            시작
         </button>
         <button onClick={stopTimer} disabled={!isRunning}>
            정지
         </button>
      </div>
   )
}

export default Quiz01
