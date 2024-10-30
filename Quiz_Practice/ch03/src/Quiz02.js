import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import React, { useState } from 'react'

function Quiz02() {
   const [display1, setDisplay1] = useState('block')
   const [display2, setDisplay2] = useState('none')

   return (
      <div>
         <img src={step1} width="150" style={{ display: display1 }} />
         <br />
         <img src={step2} width="150" style={{ display: display2 }} />
         <br />
         <p style={{ display: display1 }}>이상해씨</p>
         <p style={{ display: display2 }}>이상해풀</p>

         <button
            onClick={() => {
               setDisplay1('none')
               setDisplay2('block')
            }}
         >
            이상해씨 다음은?
         </button>
      </div>
   )
}

export default Quiz02
