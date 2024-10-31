import React, { useState } from 'react'
import './App.css'

const Quiz03 = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '메타몽', img: '/images/메타몽.png' },
      { id: 3, name: '파이리', img: '/images/파이리.png' },
   ])

   const [inputName, setInputName] = useState('')
   const [id, setid] = useState(4)
   const onChange = (e) => setInputName(e.target.value)
   const onClick = () => {
      const nextPokemons = pokemons.concat({
         id: id,
         name: inputName,
         img: `/images/${inputName}.png`,
      })
      setid(id + 1)
      setPoke(nextPokemons)
   }
   const onRemove = (id) => {
      const removePoke = pokemons.filter((pokemon) => pokemon.id !== id)
      setPoke(removePoke)
   }

   const pokesList = pokemons.map((poke) => (
      <li key={poke.id}>
         <div key={poke.id} onDoubleClick={() => onRemove(poke.id)}>
            <img src={poke.img} alt={poke.name} width="130" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input id="name" onChange={onChange} value={inputName}></input>
         <button onClick={onClick}>등록</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default Quiz03
