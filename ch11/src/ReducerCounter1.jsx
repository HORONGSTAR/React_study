import React, { useState } from 'react'

function ReducerCounter1() {
   const [count, setcount] = useState(0)
   const down = () => setcount(count - 1)
   const reset = () => setcount(0)
   const up = () => setcount(count + 1)

   return (
      <>
         <input type="button" value="-" onClick={down}></input>
         <input type="button" value="0" onClick={reset}></input>
         <input type="button" value="+" onClick={up}></input>
         <p>{count}</p>
      </>
   )
}

export default ReducerCounter1
