import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './productSlice'
import React, { useState } from 'react'

function ProductList() {
   const products = useSelector((state) => state.products)
   const dispatch = useDispatch()
   const [input, setInput] = useState('')

   return (
      <div>
         <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
         <button
            onClick={() => {
               dispatch(add(input))
               setInput('')
            }}
         >
            상품추가
         </button>
         <ul>
            {products.map((product) => (
               <li key={product.id}>
                  {product.name}
                  <button onClick={() => dispatch(remove(product.id))}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
