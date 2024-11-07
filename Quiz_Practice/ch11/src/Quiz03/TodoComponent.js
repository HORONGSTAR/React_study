import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoComponen = () => {
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()
   const [inputValue, setInputValue] = useState('')

   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'add', value: inputValue })
         setInputValue('')
      }
   }

   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', value: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoComponen
