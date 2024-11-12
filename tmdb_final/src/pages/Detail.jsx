import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Detail() {
   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 0">디테일</Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default Detail
