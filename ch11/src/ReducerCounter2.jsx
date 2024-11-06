import React, { useReducer, useState } from 'react'

function ReducerCounter2() {
   // [state값, dispatch로 사용할 함수의 이름] = reducer로 사용할 함수 이름, state초기값
   const [count, countDispatch] = useReducer(countReducer, 0)
   const [number, setNumber] = useState('')

   // reducer 함수 : 직접 state를 변경한다(회계직원역할)
   //(oldCount, action): (현재 state, dispatch에 전달받은 action)
   function countReducer(oldCount, action) {
      if (action.type === 'up') return oldCount + action.number //return 실행시 state가 업데이트
      else if (action.type === 'reset') return 0
      else if (action.type === 'down') return oldCount - action.number
   }

   // dispatch함수 : 이벤트 발생시 reduser 함수를 실행시키고 action을 전달(창구직원역할)
   // dispatch에서 값을 전달하고 싶을땐 json객체 형태로 전달
   // action은 type이라는 키값으로 전달
   const up = () => countDispatch({ type: 'up', number: number })
   const reset = () => countDispatch({ type: 'reset', number: number })
   const down = () => countDispatch({ type: 'down', number: number })
   const onChange = (e) => setNumber(Number(e.target.value))

   return (
      <>
         <input type="button" value="+" onClick={up}></input>
         <input type="button" value="0" onClick={reset}></input>
         <input type="button" value="-" onClick={down}></input>
         <input type="text" value={number} onChange={onChange}></input>
         <p>{count}</p>
      </>
   )
}

export default ReducerCounter2
