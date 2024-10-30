const Type = (props) => {
   const { str, num, bool, arr, json, func } = props
   const results = func(1, 2)

   return (
      <div>
         <p>stringProps:{str}</p>
         <p>NumberProps:{num}</p>
         <p>BooleanProps:{bool.toString()}</p>
         <p>ArrayProps:{arr.toString()}</p>
         <p>JsonProps:{JSON.stringify(json)}</p>
         <p>FunctionProps:{results}</p>
      </div>
   )
}

export default Type
