function IterationSample() {
   const names = ['눈사람', '얼음', '눈', '바람', '얼음']
   const nameList = names.map((name) => <li>{name}</li>)
   //컴포넌트 리턴
   return <ul>{nameList}</ul>
}

export default IterationSample
