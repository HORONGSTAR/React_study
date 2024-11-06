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
   console.log(props)
   return <button className={props.className}>{props.children}</button>
}

// ReactButton 의 성질을 그대로 가지고 오면서 폰트 사이즈 50px의 버튼을 그대로 만들고싶다...->적용x
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

//세미클론 필수
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
   font-size: ${(props) => props.size || '10px'};
   &:hover {
      background-color: darkblue;
   }
`
// &는 현재 컴포넌트를 의미한다. 가상클래스나 가상요소와 결합해서 사용

function ReactButton6() {
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
         <PrimaryButton>nomal</PrimaryButton>
         <PrimaryButton primary>nomal</PrimaryButton>
         <PrimaryButton size="20px;">nomal</PrimaryButton>
      </div>
   )
}

export default ReactButton6
