import React, { useState } from 'react'

//const 값을 변화시키지 x
//useState로 변화시키면 됨

function Quiz06() {
   const [count, setCount] = useState(0)
   return (
      <div>
         <p>카운트: {count}</p>
         <button onClick={() => setCount(count + 1)}>1씩 증가</button>
      </div>
   )
}

export default Quiz06
