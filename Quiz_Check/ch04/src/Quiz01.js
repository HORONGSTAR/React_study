import React, { useState } from 'react'

function Quiz01() {
   const [form, setForm] = useState({
      username: '',
      message: '',
      email: '',
   })

   const { username, message, email } = form

   const onChenge = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }
      setForm(nextForm)
   }
   const onClick = () => {
      alert(`입력값:${username}, ${message}, ${email}`)
      setForm({
         username: '',
         message: '',
         email: '',
      })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" value={username} onChange={onChenge} placeholder="이름 입력" />
         <input type="text" name="message" value={message} onChange={onChenge} placeholder="메시지 입력" />
         <input type="text" name="email" value={email} onChange={onChenge} onKeyDown={onKeyDown} placeholder="이메일 입력" />
         <button onClick={onClick} disabled={!username || !message || !email}>
            확인
         </button>
      </div>
   )
}

export default Quiz01
