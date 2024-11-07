import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const count = useSelector((stete) => stete.value)
   const dispatch = useDispatch()

   return (
      <div>
         <button onClick={() => dispatch({ type: 'up', step: 2 })}>+</button>
         <button onClick={() => dispatch({ type: 'down', step: 2 })}>-</button>
         <div>{count}</div>
      </div>
   )
}

export default Counter
