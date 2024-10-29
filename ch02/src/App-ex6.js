import logo from './logo.svg'
import './App.css'

function App() {
   //4. 인라인 스타일을 사용한다.
   const name = '리액트'
   //JSON객체
   /* const style = {
      backgroundColor: 'red', //background-color:red;
      color: 'black',
      fontSize: '48px', //font-size:48px;
      padding: 16, //단위 생략시 px로 지정
   }
   return <div style={style}>{name}</div> */

   // 혹은 이런식으로도 사용 가능
   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )
}

export default App
