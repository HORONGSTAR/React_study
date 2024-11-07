import { createStore } from 'redux'
import conuterReducer from './counterReducer'

const store = createStore(conuterReducer)

export default store
