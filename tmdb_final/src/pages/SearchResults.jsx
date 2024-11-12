import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/slider/Menu'
import Footer from '../components/slider/Footer'

function SearchResults() {
   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 0">서치</Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default SearchResults
