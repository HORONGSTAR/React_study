import React, { useRef } from 'react'

function UesRefEx() {
   const inputRef = useRef(null)

   const handleClick = () => {
      inputRef.current.focus()
      //직접적으로 dom을 다룬다.
   }
   return (
      <div>
         {/* dom을 직접적으로 다루고 싶은 요소에 inputRef적용 */}
         <input type="text" ref={inputRef} />
         <button onClick={handleClick}>Focus Input </button>
      </div>
   )
}
export default UesRefEx
