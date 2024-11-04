import { useCallback, useState } from 'react'
import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => setValue(e.target.value))

   // submit버튼을 눌렀을떄 실행되는 이벤트 함수
   // input창에서 입력한 값 등록

   const onSubmit = useCallback(
      (e) => {
         //sumbit 이벤트는 브라우저에서 새로고침을 발생시킴->이를 방지하기위해 사용
         e.preventDefault()
         onInsert(value) // props로 전달받은 onInsert함수 실행
         setValue('') //value 값 초기화
      },
      [value, onInsert] //onInsert는 useCallback으로 정의된 함수이며 todos state에 의존한다. 즉, todos가 변경될때마다 onInsert함수도 새로 만들어지므로(바뀌므로) 사용
   )

   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input type="text" placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
