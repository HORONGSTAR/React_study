import logo from './logo.svg'
import './App.css'

function App() {
   //6. 닫는 태그가 반드시 있어야 한다.
   return (
      <>
         <input type="text" />
         <input type="text"></input>
         {/* <input type="text"> 사용 X*/}
      </>
   )
}

export default App
