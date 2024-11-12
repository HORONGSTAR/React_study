import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjIwMzYyY2QzOWJlMDZhYmFmM2YzNDE1MDlmZjZmMiIsIm5iZiI6MTczMTMxMTMxNC40NDI4Njg3LCJzdWIiOiI2NzFhZThjNWE0YWM4YTQzMmM1YzIxMmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rGY1SxqsdfQ_IoLCQO4RUivUilKOzLhvSoi5DBYiZdY'

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: AUTH_KEY,
   },
})

// 공통 API 호출 함수

const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await tmdbApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API 요청 오류 : ${error.message}`)
      throw error
   }
}

// 인기, 상영중, 개봉 예정 영화 가져오기
export const getMovies = (category = 'popular', page = 1) => {
   // 카테고리에 맞는 endpoint를 가져옴
   const endpoint = {
      popular: '/movie/popular',
      now_playing: '/movie/now_playing',
      upcoming: '/movie/upcoming',
   }[category]

   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page,
      region: 'KR',
   })
}

// 인기, 방송중인 tv목록 가져오기
export const getTvs = (type, page = 1) => {
   const endpoint = {
      popular: '/tv/popular',
      on_the_air: '/tv/on_the_air',
   }[type]

   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page,
   })
}

// 영화 상세 정보 가져오기
export const getMovieDetails = (movieId) => {
   return fetchFromApi(`/movie/${movieId}`, {
      language: 'ko-KR',
   })
}

// 출연배우 정보 가져오기
export const getMovieCradits = (movieId) => {
   return fetchFromApi(`/movie/${movieId}/credits`, {
      language: 'ko-KR',
   })
}

// 검색 API 호출
export const searchMovie = (query, page = 1) => {
   return fetchFromApi('search/movie', {
      query,
      include_adult: false, //성인 컨텐츠 제외
      language: 'ko-KR',
      page,
      region: 'KR',
   })
}

export default tmdbApi
