import styled, { keyframes } from 'styled-components'

const move = keyframes`
   from {transform: translateX(0px);}
   50% {transform: translateX(100px);}
   to{transform: translateX(0px);}

`

const Ball = styled.div`
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
   animation: ${move} 2s infinite;
`

function Quiz06() {
   return <Ball />
}

export default Quiz06
