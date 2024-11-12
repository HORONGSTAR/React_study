import React, { useState, useEffect } from 'react'
import { getMovies } from '../api/tmdbApi'

function MoveiList() {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   //처음 사이트 들어왔을때 렌더링 직후 1번 실행
   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setLoading(true)
            //getMovies함수는 비동기함수 이므로 완전히 끝날떄까지 기다렸다가 결과를 받아와야한다 -> await사용
            const movieList = await getMovies(1) // 1page의 영화목록 가져오기
            setMovies(movieList.data.results) // 인기영화 목록을 movies state에 넣어줌
         } catch (err) {
            setError(err.message) // 에러메세지를 error state에 넣어줌
         } finally {
            setLoading(false) // 로딩완료
         }
      }
      fetchMovies()
   }, [])

   if (loading) return <p>Loading...</p>
   if (error) return <p> {error} </p>

   return (
      <div>
         <h1>인기 영화</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MoveiList
