import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/slider/Menu'
import Footer from '../components/slider/Footer'

function MovieCategory({ category }) {
   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 0">카테고리 {category}</Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default MovieCategory
