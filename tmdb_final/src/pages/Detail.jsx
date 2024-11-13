import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieDetail from '../components/MovieDetail'
import CreditsSlider from '../components/slider/CreditsSlider'
import { useParams } from 'react-router-dom'

function Detail() {
   const { movieId } = useParams()
   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
               <MovieDetail />
               <CreditsSlider movieId={movieId} />
            </Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default Detail
