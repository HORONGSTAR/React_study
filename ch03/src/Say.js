// state : 컴포넌트 내부에서 사용하는 바뀌는 값을 저장하는 것
import React, { useState } from 'react'

function Say() {
   // start가 바뀌면 컴포넌트가 리렌더링이 되고 function안의 소스코드가 다시 실행된다.
   console.log('리렌던링 시작')
   /* 1. useState 선언
   const [ state값을 저장할 변수, state값을 바꿀 함수] = useState(초기 state값)
   컴포넌트 내부에서 사용하는 함수들은 컴포넌트 function안에 작성
    */
   const [message, setMessage] = useState('초기값')
   const [color, setColor] = useState('yellow')
   const onClickEvent = () => setMessage('안녕하세요')
   const onClickLeave = () => setMessage('안녕히가세요')
   const onClickRed = () => setColor('red')
   const onClickGreen = () => setColor('green')

   return (
      <div>
         <button onClick={onClickEvent}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         <button onClick={onClickRed}>빨강</button>
         <button onClick={onClickGreen}>초록</button>
         <button onClick={() => setColor('blue')}>파랑</button>
      </div>
   )
}

export default Say
