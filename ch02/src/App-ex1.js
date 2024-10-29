import logo from './logo.svg'
import './App.css'

//앱 컴포넌트 (함수명 + 컴포넌트)
function App() {
   return (
      // 1.반드시 부모요소로 감싸야한다. 태그나 fragment를 이용
      //   <div>
      //      <h1>리액트</h1>
      //      <h2> 리액트 안녕</h2>
      // </div>
      <>
         <h1>리액트</h1>
         <h2> 리액트 안녕</h2>
      </>
   )
}

// 컴포넌트를 외부에서 사용할 수 있도록 지정
export default App
