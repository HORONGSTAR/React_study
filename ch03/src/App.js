//import export 해주는 걸 어떤 이름으로 사용할 건지 (export이름과 똑같이 사용하길 권장) from 파일경로
/* import Mycomponent from './Mycomponent'
import Test from './Testnum'
import Type from './Type'
 */

// import Say from './Say'
import InputText from './InputText'

/* const func = (a, b) => {
   return a + b
} */

function App() {
   /* let day = new Date()
     <div>
         <Mycomponent name="박별" job="학생" forNumber={1}>
            맑음
         </Mycomponent>
         <br />
         <Test num="1" day={day.getDate()}></Test>
      </div>
   return <Type str="react" num={200} bool={1 == 1} arr={[0, 1, 2]} json={{ react: '리액트', time: 2 }} func={func}></Type>
   return <Say></Say> */
   return <InputText></InputText>
}
export default App
