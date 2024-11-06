import styled from 'styled-components'

const BoxSize = { small: '100px', medium: '200px', large: '300px' }

const Box = styled.div`
   background-color: lightgray;
   margin: 10px;
   width: ${(props) => BoxSize[props.size]};
   height: ${(props) => BoxSize[props.size]};
`

function Quiz04() {
   return (
      <div>
         <Box size="small">Small Box</Box>
         <Box size="medium">Medium Box</Box>
         <Box size="large">Large Box</Box>
      </div>
   )
}

export default Quiz04
