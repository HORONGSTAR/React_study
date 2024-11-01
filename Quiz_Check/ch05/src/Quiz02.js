import React, { useState } from 'react'

function Quiz02() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])
   const [inputName, setInputName] = useState('')
   const [inputDept, setInputDept] = useState('')
   const [nextId, setNextId] = useState(5)

   const employeesList = employees.map((employee) => (
      <li key={employee.id}>
         사원명:{employee.name}, 부서:{employee.dept}
      </li>
   ))

   const onChangeName = (e) => setInputName(e.target.value)
   const onChangeDept = (e) => setInputDept(e.target.value)

   const addEmployees = () => {
      const nextEmployees = employees.concat({
         id: nextId,
         name: inputName,
         dept: inputDept,
      })
      setNextId(nextId + 1)
      setEmployees(nextEmployees)
      setInputName('')
      setInputDept('')
      return
   }

   return (
      <>
         <input type="text" id="name" onChange={onChangeName} value={inputName} placeholder="사원 이름" />
         <input type="text" id="dept" onChange={onChangeDept} value={inputDept} placeholder="부서" />
         <button onClick={addEmployees}>추가</button>
         <ul>{employeesList}</ul>
      </>
   )
}

export default Quiz02
