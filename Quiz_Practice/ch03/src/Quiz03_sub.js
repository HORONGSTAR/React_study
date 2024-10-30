import React, { useState } from 'react'

function Quiz03_sub(props) {
   const [value, setValue] = useState('')
   return (
      <div>
         <button onClick={() => setValue(props.updateMessage)}>{value}메시지 변경</button>
      </div>
   )
}

export default Quiz03_sub
