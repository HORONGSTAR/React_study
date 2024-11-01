import React, { useEffect } from 'react'

function Quiz02() {
   useEffect(() => {
      console.log('Component rendered')
   })
   // 수정될때마다(지금은 1번)

   return <div>Hello World</div>
}

export default Quiz02
