import React, { useState } from 'react'

function ToDo() {
   const [colorTheme, setColorTheme] = useState('light')
   const onChangeColor = (e) => setColorTheme(e.target.value)
   const [todos, setTodos] = useState([
      { id: 1, text: '테스트1' },
      { id: 2, text: '테스트2' },
      { id: 3, text: '테스트2' },
      { id: 4, text: '테스트2' },
   ])
   const todoList = todos.map((todo) => (
      <li key={todo.id} className="list-group-item">
         {todo.text}
      </li>
   ))

   return (
      <div className={colorTheme + ' container p-3'}>
         <header>
            <div className="p-3" style={{ width: 120 }}>
               <select className="form-select form-select-sm " id="" onChange={onChangeColor}>
                  <option value="light">라이트</option>
                  <option value="dark">다크</option>
                  <option value="pink">핑크</option>
                  <option value="sky">스카이</option>
                  <option value="olive">올리브</option>
               </select>
            </div>
         </header>
         <main>
            <div>
               <div className="p-3">
                  <input type="text" />
               </div>
               <div>
                  <ul className="list-group">{todoList}</ul>
               </div>
            </div>
         </main>
      </div>
   )
}
export default ToDo
