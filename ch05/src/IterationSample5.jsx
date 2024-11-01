import React, { useState } from 'react'

function IterationSample5() {
   const [names, setName] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [nextId, setNextId] = useState(5) //아이디를 만들어주는 state
   const [inputText, setInputText] = useState('')

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   const onChange = (e) => setInputText(e.target.value)

   const onClick = () => {
      const nextNames = names.concat({
         id: nextId,
         text: inputText,
      })
      setName(nextNames) //names state를 합친 배열로 변경
      setNextId(nextId + 1) // 다음 데이터 추가시 nextId를 1씩 증가시키기 위해
      setInputText('') // input창에서 사용하는 state값
   }

   const onKeyDown = (e) => {
      if (e.key == 'Enter') {
         onClick()
      }
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>추가</button>

         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
