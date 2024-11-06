import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import './AppNavLink.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home..
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'HTML', description: 'JS is...' },
   { id: 3, title: 'HTML', description: 'React is...' },
]

function Topic() {
   var params = useParams()
   var topic_id = params.topic_id // 경로 파라메터 값을 가지고 온다

   var selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }

   for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break
      }
   }
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         <p>{selected_topic.description}</p>
      </div>
   )
}

function Topics() {
   var lis = []

   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics' + contents[i].id}>{contents[i].description}</NavLink>
         </li>
      )
   }

   return (
      <div>
         <h2>Topics</h2>
         <ul>{lis}</ul>
         <Routes>
            {/* http://localhost:3000/topics/? 주소 형태일때 <Topic/>컴포넌트를 보여준다 */}
            <Route path="/:topic_id" element={<Topic></Topic>}></Route>

            {/* <Route path="/1" element={'HTML is ...'}></Route>
            <Route path="/2" element={'JS is ...'}></Route>
            <Route path="/3" element={'React is ...'}></Route> */}
         </Routes>
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
               <NavLink to="/home">home</NavLink>
            </li>
            <li>
               <NavLink to="/topics/*">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>

         <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/topics/*" element={<Topics></Topics>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/*" element={'not found'}></Route>
         </Routes>
      </div>
   )
}

export default App
