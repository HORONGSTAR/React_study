import React, { useState } from 'react'

function ToDo() {
   const [colorTheme, setColorTheme] = useState('light')
   const [inputTodo, setInputTodo] = useState('')
   const [nextId, setNextId] = useState(5)

   const [todos, setTodos] = useState([
      { id: 1, text: '화분에 물주기' },
      { id: 2, text: '저녁 장보기 : 토마토, 오이, 당근, 대파' },
      { id: 3, text: '회색 후드집업 세탁 맡기기' },
      { id: 4, text: '리액트 프로젝트 마무리' },
   ])

   const onChangeColor = (e) => setColorTheme(e.target.value)

   const todoList = todos.map((todo) => (
      <li key={todo.id} className="list-group-item">
         <div className="form-check">
            <input className="form-check-input" type="checkbox" id={todo.id} />
            <label className="form-check-label" htmlFor={todo.id}>
               {todo.text}
            </label>
         </div>
      </li>
   ))

   const onChangeInput = (e) => setInputTodo(e.target.value)
   const onClickAdd = () => {
      const nextTodo = todos.concat({ id: nextId, text: inputTodo })
      setTodos(nextTodo)
      setNextId(nextId + 1)
      setInputTodo('')
   }

   return (
      <div className={colorTheme + ' container'}>
         <header>
            <div className="p-3">
               <label htmlFor="colorTheme-select">색상 테마 변경</label>
               <select
                  className="form-select form-select-sm "
                  id="colorTheme-select"
                  onChange={onChangeColor}
                  style={{ width: 120 }}
               >
                  <option value="light">라이트</option>
                  <option value="dark">다크</option>
                  <option value="pink">핑크</option>
                  <option value="sky">스카이</option>
                  <option value="olive">올리브</option>
               </select>
            </div>
         </header>
         <main>
            <div className="row">
               <div className="input-group mb-3">
                  <input
                     type="text"
                     className="form-control"
                     aria-describedby="basic-addon1"
                     onChange={onChangeInput}
                     value={inputTodo}
                  />
                  <button type="button" class="btn btn-outline-secondary" onClick={onClickAdd}>
                     추가
                  </button>
               </div>
               <div className="col-sm-8 w-100">
                  <ul className="list-group">{todoList}</ul>
               </div>
            </div>
         </main>
      </div>
   )
}
export default ToDo
