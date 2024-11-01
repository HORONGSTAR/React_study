import React, { useState, useMemo } from 'react'

function getAverage(numbers) {
   console.log('평균값 계산....')
   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) //누적 합산 구하는 함수
   return sum / numbers.length
}
function UseMemoEx2() {
   const [list, SetList] = useState([])
   const [number, SetNumber] = useState('')
   const OnChange = (e) => SetNumber(e.target.value)
   const onInsert = () => {
      const NextList = list.concat(Number(number))
      SetList(NextList)
      SetNumber('')
   }

   // list state가 바뀔때만 getAverage가 실행된다.

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
export default UseMemoEx2
