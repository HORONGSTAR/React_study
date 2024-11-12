import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail'
import MovieCategory from './pages/MovieCategory'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'

import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/popular" element={<MovieCategory category="popular" />}></Route>
         <Route path="/now_playing" element={<MovieCategory category="now_playing" />}></Route>
         <Route path="/upcoming" element={<MovieCategory category="upcoming" />}></Route>
         <Route path="/detail/:movieId" element={<Detail />}></Route>
         <Route path="/search" element={<SearchResults />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
      </Routes>
   )
}

export default App
