import { useState } from 'react'

// 토글(toggle) 기능 hooks
function useToggle(initialValue) {
   const [value, setValue] = useState(initialValue)
   const toggle = () => {
      setValue(!value) // t > f > t > f
   }
   return [value, toggle]
}

export default useToggle
