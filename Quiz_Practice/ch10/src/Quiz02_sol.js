import styled from 'styled-components'

const Button = styled.button`
   background-color: ${(props) => props.color || 'gray'};
   color: white;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
`

function Quiz02_sol() {
   return (
      <div>
         <Button color="blue">Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02_sol
