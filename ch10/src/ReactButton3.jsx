import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
// 백틱안에 css를 작성 (css와 똑같이 작성)
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

function ReactButton3() {
   const style = {
      color: 'white',
      backgroundColor: 'purple',
   }
   return <LargeButton>버튼</LargeButton>
}
export default ReactButton3
