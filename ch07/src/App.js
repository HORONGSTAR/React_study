import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import './App.css'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심 약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: true,
      },
   ])

   const nextId = useRef(4) //고유값으로 사용될 id, ref를 사용하여 변수 담기
   // ref를 사용시 컴포넌트 렌더링x, 다른 state가 바뀌면서 재렌더링이 되어도 값이 변경되지x

   // 할일 등록
   const onInsert = (text) => {
      const todo = {
         id: nextId.current, //ref의 값을 가져온다
         text, // = text:text
         checked: false,
      }
      setTodos(todos.concat(todo))
      nextId.current += 1 //nextId를 1씩 증가
   }

   // 할일 삭제
   const onRemove = (id) => {
      const removeTodos = todos.filter((todo) => todo.id !== id)
      setTodos(removeTodos)
   }

   // 할일 완료, 미완료 (토글)
   const onToggle = useCallback(
      (id) => {
         setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
      },
      [todos]
   )

   return (
      <div>
         <TodoTemplate>
            {/* 컴포넌트를 childron props로 전달 */}

            <TodoInsert onInsert={onInsert} />
            {/* TodoInsert 컴포넌트에 onInsert 함수 전달 */}

            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            {/* todos는 TodoListItem 컴포넌트에서 */}
         </TodoTemplate>
      </div>
   )
}

export default App
