import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])

   const [inputText, setInputText] = useState([{ id: 3, name: '', status: '' }])

   const inputProjects = projects.map((project) => (
      <li key={project.id}>
         프로젝트명:{project.name}, 상태:{project.status}
      </li>
   ))

   const addProject = (e) => {
      const nextProject = {
         id: inputText.id,
         name: inputText.name,
         status: inputText.status,
      }
      const newProjects = projects.concat(nextProject)
      setProjects(newProjects)
   }

   const onChangeName = (e) => setInputText({ [e.target.id]: e.target.value })
   const onChangeStatus = (e) => setInputText({ [e.target.id]: e.target.value })

   return (
      <>
         <input type="text" id="name" value={inputText.name} onChange={onChangeName} />
         <select id="status" onChange={onChangeStatus} value={inputText.status}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={addProject}>추가</button>
         <ul>{newProjects}</ul>
      </>
   )
}

export default Quiz02
