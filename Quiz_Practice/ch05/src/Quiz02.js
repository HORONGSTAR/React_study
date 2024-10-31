import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])
   const [id, setId] = useState(3)

   const projectsList = projects.map((project) => (
      <li key={project.id} onDoubleClick={() => remove(project.id)}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))

   const remove = (id) => {
      const removeProject = projects.filter((project) => project.id !== id)
      setProjects(removeProject)
   }
   const [inputName, setInputName] = useState('')
   const [selectStatus, setSelectStatus] = useState('미완료')

   const onChangeInput = (e) => setInputName(e.target.value)
   const onChangeSelect = (e) => setSelectStatus(e.target.value)

   const addProject = () => {
      const nextProject = projects.concat({
         id: id,
         name: inputName,
         status: selectStatus,
      })
      setProjects(nextProject)
      setId(id + 1)
   }

   return (
      <div>
         <input type="text" id="name" onChange={onChangeInput} value={inputName} />
         <select id="status" onChange={onChangeSelect} value={selectStatus}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={addProject}>추가</button>
         <ul>{projectsList}</ul>
      </div>
   )
}

export default Quiz02
