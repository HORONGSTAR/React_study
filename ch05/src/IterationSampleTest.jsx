import React, { useState } from 'react'

function IterationSampleTest() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [nextId, setNextId] = useState(5) //아이디를 만들어주는 state
   const [inputText, setInputText] = useState('')
   const [deleteBtn, setDeleteBtn] = useState(false)

   const nameList = names.map((name) => (
      <li key={name.id}>
         {name.text}
         <button id={name.id} onClick={() => onRemove(name.id)} style={deleteBtn ? { display: 'inline' } : { display: 'none' }}>
            삭제
         </button>
      </li>
   ))

   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)
      setNames(nextNames)
   }

   const onChange = (e) => setInputText(e.target.value)

   const onClick = () => {
      const nextNames = names.concat({
         id: nextId,
         text: inputText,
      })
      setNames(nextNames) //names state를 합친 배열로 변경
      setNextId(nextId + 1) // 다음 데이터 추가시 nextId를 1씩 증가시키기 위해
      setInputText('') // input창에서 사용하는 state값
   }

   const onKeyDown = (e) => {
      if (e.key == 'Enter') {
         onClick()
      }
   }

   const onEdit = () => {
      deleteBtn ? setDeleteBtn(false) : setDeleteBtn(true)
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>추가</button>
         <button onClick={onEdit}>{deleteBtn ? '확인' : '편집'}</button>

         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSampleTest
