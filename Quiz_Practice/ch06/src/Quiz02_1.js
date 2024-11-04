import React, { useState, useCallback } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = useCallback((event) => {
      setText(event.target.value)
   }, [])

   const handleSubmit = useCallback(
      (event) => {
         event.preventDefault() // 서버에 전송하는걸 막아준다
         setItems([...items, text])
         setText('')
      },
      [items, text] // items와 text state함수를 내부에서 read해서 사용하므로 items와 text state가 바뀔때 함수가 재생성 되도록 한다
   )

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">추가</button>
         </form>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz02_1
