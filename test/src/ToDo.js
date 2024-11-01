import React, { useState } from 'react'

function ToDo() {
   const [colorTheme, setColorTheme] = useState('light wrap')
   const onChangeColor = (e) => setColorTheme(`${e.target.id} wrap`)
   const [todos, setTodos] = useState([
      { id: 1, text: '테스트1' },
      { id: 2, text: '테스트2' },
   ])
   const todoList = todos.map((todo) => <li key={todo.id}>{todo.text}</li>)

   return (
      <div className={colorTheme}>
         <div>
            <select name="" id="" onChange={onChangeColor}>
               <option value="light"></option>
               <option value="dark"></option>
               <option value="pink"></option>
               <option value="sky"></option>
               <option value="olive"></option>
            </select>

            <input type="text" />

            <div>
               <ul>{todoList}</ul>
            </div>
         </div>
      </div>
   )
}
export default ToDo
