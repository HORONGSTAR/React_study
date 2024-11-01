import React, { useEffect } from 'react'

function Quiz01() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   // 1번

   return <div>Hello World</div>
}

export default Quiz01
