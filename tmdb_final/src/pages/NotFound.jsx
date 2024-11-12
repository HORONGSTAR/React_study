import '../styles/common.css'
import { Wrap, Main } from '../styles/StylesComponent'
import Menu from '../components/slider/Menu'
import Footer from '../components/slider/Footer'

function NotFound() {
   return (
      <div>
         <Wrap>
            <Menu />
            <Main $padding="30px 30px">
               <h3>잘못된 경로입니다.</h3>
            </Main>
            <Footer />
         </Wrap>
      </div>
   )
}

export default NotFound
