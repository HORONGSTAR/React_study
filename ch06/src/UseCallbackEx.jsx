import React, { useState, useMemo, useCallback } from 'react'

function getAverage(numbers) {
   console.log('평균값 계산....')
   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b)
   return sum / numbers.length
}

function UseCallbackEx() {
   const [list, SetList] = useState([])
   const [number, SetNumber] = useState('')

   // 컴포넌트가 처음 렌더링 될때만 함수 생성
   const OnChange = useCallback((e) => SetNumber(e.target.value), [])

   const onInsert = useCallback(() => {
      const NextList = list.concat(Number(number))
      SetList(NextList)
      SetNumber('')
   }, [number, list]) //number혹은 list state가 바뀔때만 함수 생성

   const avg = useMemo(() => getAverage(list), [list])

   return (
      <>
         <input type="text" value={number} onChange={OnChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값:{avg} </b>
         </div>
      </>
   )
}
export default UseCallbackEx
