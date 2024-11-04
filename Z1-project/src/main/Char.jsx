import React, { useState, useMemo, useCallback } from 'react'

function Char() {
   const [chars, setChars] = useState([
      {
         id: 0,
         name: 'No-Name',
         img: 'https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         keyword: '#one #two #three',
      },
   ])
   const [nextId, setNextId] = useState(1)
   const [inputName, setinputName] = useState('')
   const [inputKeyWord, setinputKeyWord] = useState('')
   const [inputImg, setinputImg] = useState('')

   const charsList = chars.map((char) => {
      return (
         <div className="col-3 my-3" key={char.id}>
            <div className="card">
               <img src={char.img} className="card-img-top" alt={char.name}></img>
               <div className="card-body">
                  <h5 className="card-title">{char.name}</h5>
                  <p className="card-text">{char.keyword}</p>
               </div>
            </div>
         </div>
      )
   })

   const addNextChar = useCallback(() => {
      const nextChar = chars.concat({
         id: nextId,
         name: inputName,
         img: inputImg,
         keyword: inputKeyWord,
      })
      setChars(nextChar)
      setNextId(nextId + 1)
      setinputName('')
      setinputKeyWord('')
      setinputImg('')
   }, [inputName, inputImg, inputKeyWord])

   const onChangeName = (e) => setinputName(e.target.value)
   const onChangeKeyWord = (e) => setinputKeyWord(e.target.value)
   const onChangeImg = (e) => setinputImg(e.target.value)

   return (
      <section className="p-3 container">
         <div className="row">{charsList}</div>
         <div className="input-group mb-3">
            <span className="input-group-text">이름</span>
            <input id="name" type="text" className="form-control" onChange={onChangeName} value={inputName} />
         </div>
         <div className="input-group mb-3">
            <span className="input-group-text">키워드</span>
            <input id="name" type="text" className="form-control" onChange={onChangeKeyWord} value={inputKeyWord} />
         </div>
         <div className="input-group mb-3">
            <span className="input-group-text">이미지 주소</span>
            <input id="name" type="text" className="form-control" onChange={onChangeImg} value={inputImg} />
         </div>
         <button onClick={addNextChar} type="button" className="btn btn-secondary" disabled={inputName && inputKeyWord && inputImg ? false : true}>
            +
         </button>
      </section>
   )
}
export default Char
