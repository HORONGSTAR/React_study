import './App.css'
import Todo from './components/Todo'
import { Provider } from 'react-redux'

function App() {
   return (
      <div>
         <provider>
            <Todo></Todo>
         </provider>
      </div>
   )
}

export default App
