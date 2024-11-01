import React, { useState, useEffect } from 'react'

function Quiz03() {
   const [count, setCount] = useState(0)

   useEffect(() => {
      console.log('Count changed', count)
   }, [count])

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
   )
}

export default Quiz03
