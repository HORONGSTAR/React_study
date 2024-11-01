import React from 'react'
import useToggle from './useToggle'

function ToggleExapmle() {
   const [isToggled, setToggle] = useToggle(false)
   return (
      <div>
         <button onClick={setToggle}>{isToggled ? '끄기' : '켜기'}</button>
         {isToggled && <p>토글 상태가 켜져 있습니다.</p>}
      </div>
   )
}

export default ToggleExapmle
