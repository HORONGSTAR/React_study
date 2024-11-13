import './css/Banner.css'
import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Banner() {
   const [searchQuery, setSearchQuery] = useState('')
   const handleInputChange = useCallback((e) => setSearchQuery(e.target.value))
   // useNavigate훅:페이지를 이동할 수 있게 해주는 훅. 특정 이벤트(예-버튼 클릭)에서 페이지를 이동
   const navigate = useNavigate()
   const handleSearch = useCallback(
      (e) => {
         e.preventDefault()
         if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`) //이동경로 지정
         }
      },
      [searchQuery, useNavigate()]
   )

   return (
      <div style={{ width: '100%', height: '400px', backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(/images/banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
         <div className="search">
            <h1 className="header_msg">환영합니다! 수백만 개의 영화를 지금 살펴보세요.</h1>
            <form className="search_form" onSubmit={handleSearch}>
               <TextField sx={{ backgroundColor: 'white', borderRadius: 1 }} fullWidth label="영화검색" id="fullWidth" value={searchQuery} onChange={handleInputChange} />
               <Button sx={{ width: 100, height: 56, backgroundColor: 'white' }} variant="outlined" startIcon={<SearchIcon />} type="submit">
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Banner
