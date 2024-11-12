import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjIwMzYyY2QzOWJlMDZhYmFmM2YzNDE1MDlmZjZmMiIsIm5iZiI6MTczMTI5MDEyMi42NjU0MTY1LCJzdWIiOiI2NzFhZThjNWE0YWM4YTQzMmM1YzIxMmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.H7PDF975feMh_UQ_AxPxbI4kuHziE_piyb9NXYc7mmg'

// api call을 준비하기 위한 axios 인스턴스 생성(객체 생성)
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', //json 형태로 response 데이터를 받겠다
      Authorization: AUTH_KEY, // 서버에 request 할 때 필요한 인증키
   },
})
// 인기 영화 목록 가져오기
// getMovies 함수를 외부에서 사용하기 위해 export 키워드 작성
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page, // page: page, 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
         region: 'KR',
      },
   }) // 서버에 read 요청 (get이랑 패치랑 똑같다고 생각하면 된다고 하심...)
   return response // 서버에 요청이 다 끝난 후에 결과데이터를 return
}

export default tmdbApi
