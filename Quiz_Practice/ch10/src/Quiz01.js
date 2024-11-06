import styled from 'styled-components'

const StyledInput = styled.input`
   background-color: skyblue;
   border: 2px solid black;
`
const StyledInput2 = styled(StyledInput)`
   background-color: white;
`

function Quiz01() {
   return (
      <div>
         <StyledInput></StyledInput>
         <StyledInput2></StyledInput2>
      </div>
   )
}

export default Quiz01
