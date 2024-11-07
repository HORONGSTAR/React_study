import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      //store.(store에 지정한 슬라이스 key값).value
      return state.counter.value
   })
   return (
      <div>
         <button onClick={() => dispatch(up(2))}>+</button>
         <button onClick={() => dispatch(down(2))}>-</button>
         <div>{count}</div>
      </div>
   )
}

export default Counter
