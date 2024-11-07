import Counter from './UseToolkit/Counter'
import User from './UseToolkit/User'
import { Provider } from 'react-redux'
import storeUseToolkit from './UseToolkit/store'

function App() {
   return (
      <Provider store={storeUseToolkit}>
         <Counter></Counter>
         <User></User>
      </Provider>
   )
}

export default App
