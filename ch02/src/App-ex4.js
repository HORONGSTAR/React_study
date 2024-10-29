import logo from './logo.svg'
import './App.css'

function App() {
   // 3. || 연산 (A || B) -> A가 true라면 A를 렌더링, A가 false라면 B를 렌더링
   //  const name = undefined //faise
   const name = '안녕' //faise

   return <div>{name || '리액트'}</div>
}

export default App
