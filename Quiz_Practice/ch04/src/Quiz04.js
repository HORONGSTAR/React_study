import React, { useState } from 'react'
import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'

function Quiz04() {
   /*  const [form, setForm] = useState({ name: '이상해씨', display: ['block', 'none', 'none'] })
   const { name, display } = form

   const onClick = () => {
      if (name[0] == '이상해씨') {
         const nextForm = { ...form, name: '이상해풀', display: ['none', 'block', 'none'] }
         setForm(nextForm)
      }
      if (name[0] == '이상해풀') {
         const nextForm = { ...form, name: '이상해꽃', display: ['none', 'none', 'block'] }
         setForm(nextForm)
      }
   }

   return (
      <div>
         <img style={{ display: display[0] }} src={step1} width="150" />
         <img style={{ display: display[1] }} src={step2} width="150" />
         <img style={{ display: display[2] }} src={step3} width="150" />
         <br />
         <button onClick={onClick} style={name == '이상해꽃' ? { display: 'none' } : { display: 'block' }}>
            {name} 진화!
         </button>
         <p style={{ display: display[2] }}>진화 끝!</p>
      </div>
   ) */
   const [displayStates, setDisplayStates] = useState({
      display1: 'block',
      display2: 'none',
      display3: 'none',
      level: 1,
   })

   const evolve = (display, levelVal) => {
      setDisplayStates({
         display1: 'none',
         display2: 'none',
         display3: 'none',
      })
      // prevState : 직전 state을 가져와준다
      // setDisplayStates와 같은 효과
      setDisplayStates((prevState) => ({ ...prevState, [display]: 'block', level: levelVal }))
   }
   return (
      <div>
         <img src={step1} width="150" style={{ display: displayStates.display1 }} />
         <img src={step2} width="150" style={{ display: displayStates.display2 }} />
         <img src={step3} width="150" style={{ display: displayStates.display3 }} />

         <br />

         {displayStates.level === 1 && <button onClick={() => evolve('display2', 2)}>이상해씨 진화!</button>}
         {displayStates.level === 2 && <button onClick={() => evolve('display3', 3)}>이상해꽃 진화!</button>}
         {displayStates.level === 3 && <p>진화 끝!</p>}
      </div>
   )
}

export default Quiz04
