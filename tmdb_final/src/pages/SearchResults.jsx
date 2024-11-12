import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

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
