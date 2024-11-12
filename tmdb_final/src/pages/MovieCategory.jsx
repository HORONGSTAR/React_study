import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'
import MovieCard from './MovieCard'

import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Button } from '@mui/material'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 카테고리별로 사용할 초기 page 지정
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   useEffect(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: 1,
      }))
   }, [category])

   // page가 변할때마다 영화 데이터 로딩
   useEffect(() => {
      dispatch(fetchMovies({ category, page: page[category] }))
   }, [dispatch, page])

   // 더보기를 누르면 해당 카테고리의 page state를 1씩 증가
   // loadMore()를 실행 -> page state가 변경 -> useEffect 실행
   const loadMore = useCallback(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1,
      }))
   }, [category])

   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
               <MovieCard movies={movies}></MovieCard>
               <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', width: '500px' }} onClick={loadMore}>
                  더보기
               </Button>
            </Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default MovieCategory
