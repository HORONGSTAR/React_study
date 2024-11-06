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

// 리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   return <button>{props.children}</button>
}

// ReactButton 의 성질을 그대로 가지고 오면서 폰트 사이즈 50px의 버튼을 그대로 만들고싶다...->적용x
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton4() {
   const style = {
      color: 'white',
      backgroundColor: 'purple',
   }
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React</ReactLargeButton>
      </div>
   )
}

export default ReactButton4
