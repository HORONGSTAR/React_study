function Quiz02(props) {
   const { name, age, phope, children } = props
   return (
      <div>
         <h2>학생정보</h2>
         <ul>
            <li>이름:{name}</li>
            <li>나이:{age}</li>
            <li>핸드폰번호:{phope}</li>
            <li>학과:{children}</li>
         </ul>
      </div>
   )
}

export default Quiz02
