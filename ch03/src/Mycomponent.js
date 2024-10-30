import PropTypes from 'prop-types'

// 1. 컴포넌트는 작성시 파일명을 대문자로 시작한다.
// 2. 화살표 함수나 function함수로 작성
// 3. 함수명은 파일명과 똑같이 작성
// 4. 외부에서 컴포넌트를 사용하기 위해 마지막에 무조건 export 해준다.

const Mycomponent = (props) => {
   /* props = {name: '박별', job: '학생', forNumber: 1, children: '맑음'} */
   /* const { name, job, forNumber, children } = props */
   const { name = '기본이름', job = '무직', forNumber, children } = props
   console.log(props)
   return (
      <div>
         <div>안녕하세요. 제 이름은 {name}입니다.</div>
         <div>
            제 직업은 {job} 입니다. 숫자는 {forNumber}
         </div>
         <div>children 값은 {children}입니다.</div>
      </div>
   )
}

/* 
나중에 사라질 방식
Mycomponent.defaultProps = {
   name: '기본이름',
   job: '무직',
} */

//속성값의 타입 검증
Mycomponent.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}

export default Mycomponent
