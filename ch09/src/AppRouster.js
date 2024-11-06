import { Route, Routes } from 'react-router-dom'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home..
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics..
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact..
      </div>
   )
}

function App() {
   return (
      <div className="App">
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <a href="/home">home</a>
            </li>
            <li>
               <a href="/topics">Topics</a>
            </li>
            <li>
               <a href="/contact">Contact</a>
            </li>
         </ul>

         <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/topics" element={<Topics></Topics>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/*" element={'not found'}></Route>
         </Routes>
      </div>
   )
}

export default App
