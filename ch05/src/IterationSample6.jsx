import React, { useState } from 'react'

function IterationSample6() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [nextId, setNextId] = useState(5)
   const [inputText, setInputText] = useState('')

   const nameList = names.map((name) => (
      <li onDoubleClick={() => onRemove(name.id)} key={name.id}>
         {name.text}
      </li>
   ))

   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)
      setNames(nextNames)
   }
   const onChange = (e) => setInputText(e.target.value)

   const onClick = () => {
      const nextNames = names.concat({ id: nextId, text: inputText })
      setNames(nextNames)
      setNextId(nextId + 1)
      setInputText('')
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

export default IterationSample6
