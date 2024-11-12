import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/slider/Menu'
import Footer from '../components/slider/Footer'

function Home() {
   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 0">홈</Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default Home
