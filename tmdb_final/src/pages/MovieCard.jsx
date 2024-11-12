import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

function MovieCard({ movies }) {
   return (
      <Grid container spacing={2.5}>
         {movies.map((movie) => (
            <Grid size={2.4} key={movie.id}>
               <Link to={`/detail/${movie.id}`} style={{ display: 'none' }}></Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
