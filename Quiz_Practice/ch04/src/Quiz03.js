import React, { useState } from 'react'

function Quiz03() {
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }
      setForm(nextForm)
      if (e.target.name == 'message' && e.target.value.length > 20) {
         alert('20자를 초과해서 작성할 수 없습니다!')
      }
   }

   const onClick = () => {
      alert(`입력값: ${username}, ${message}`)
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" value={username} onChange={onChange} />
         <input type="text" name="message" placeholder="메시지 입력 (최대 20자)" value={message} onChange={onChange} onKeyDown={onKeyDown} />
         <div>현재 입력한 글자 수: {message.length}</div>
         <button onClick={onClick} disabled={message.length > 20 ? true : false}>
            확인
         </button>
      </div>
   )
}

export default Quiz03