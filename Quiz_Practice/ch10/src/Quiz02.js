import styled from 'styled-components'

const Button = styled.button`
   color: white;
   border: none;
   border-radius: 5px;
   padding: 5px;
   background-color: ${(props) => props.color || 'gray'};
`

function Quiz02() {
   return (
      <div>
         <Button color="blue">Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02
