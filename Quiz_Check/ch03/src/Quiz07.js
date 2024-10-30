import React, { useState } from 'react'

function Quiz07() {
   const [isOn, setIsOn] = useState(false)
   return (
      <div>
         <p>{isOn ? 'ON' : 'OFF'}</p>
         <button onClick={(e) => (isOn ? setIsOn(false) : setIsOn(true))}>토글</button>
      </div>
   )
}

export default Quiz07
