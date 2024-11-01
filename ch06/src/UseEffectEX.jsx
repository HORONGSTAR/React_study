import React, { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickname, setNickname] = useState('')

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickname = (e) => setNickname(e.target.value)

   // 1.컴포넌트가 렌더링 될때마다 실행
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log(name, nickname)
   //    })

   // 2. 맨처음 렌더링 될때만 실행되고, 업데이트(리렌더링)될때는 실행되지 않음
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log(name, nickname)
   //    }, [])

   //3. 특정값이 변경될때만 호출
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log(name, nickname)
   //    }, [name])

   //4. 뒷정리 함수
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log(name, nickname)
   //       //렌더링 되기 바로 직전에 실행
   //       return () => {
   //          console.log('컴포넌트가 업데이트 되기 전..')
   //          console.log(nickname)
   //       }
   //    })

   //    useEffect(() => {
   //       //렌더링 실행 직후
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log(name, nickname)
   //       //렌더링 되기 바로 직전에 실행
   //       return () => {
   //          console.log('컴포넌트가 업데이트 되기 전..')
   //          console.log(nickname)
   //       }
   //    }, [name])

   useEffect(() => {
      //렌더링 실행 직후
      console.log('렌더링이 완료되었습니다.')
      console.log(name, nickname)
      //렌더링 되기 바로 직전에 실행
      return () => {
         console.log('컴포넌트가 업데이트 되기 전..')
         console.log(nickname)
      }
   }, [])

   return (
      <div>
         <div>
            <input type="text" placeholder="name" value={name} onChange={onChangeName} />
            <br />
            <input type="text" placeholder="nickname" value={nickname} onChange={onChangeNickname} />
         </div>
         <div>
            <div>
               <b>이름: </b>
               <span>{name}</span>
            </div>
            <div>
               <b>닉네임: </b>
               <span>{nickname}</span>
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
