function Quiz03(props) {
   const { name, age = 21, phone, children } = props
   return (
      <div>
         <h2>학생정보</h2>
         <ul>
            <li>이름:{name}</li>
            <li>나이:{age}</li>
            <li>핸드폰 번호:{phone}</li>
            <li>학과:{children}</li>
         </ul>
      </div>
   )
}

export default Quiz03
