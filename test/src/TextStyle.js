import React, { useState, useRef } from 'react'

function TextStyle() {
   const [form, setForm] = useState({
      width: '500px',
      color: 'black',
      fontSize: '15px',
      textDecoration: 'none',
   })

   const { width, color, fontSize, textDecoration } = form

   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.id]: e.target.value,
      }
      setForm(nextForm)
   }

   const onFocus = (e) => {
      const nextForm = {
         ...form,
         [e.target.id]: '',
      }
      setForm(nextForm)
   }

   return (
      <>
         <div className="wrap">
            <h1>.Text #Style</h1>
            <ul>
               <li>
                  <label htmlFor="width">width : </label>
                  <input id="width" type="text" onChange={onChange} onFocus={onFocus} value={width} list="widthList" />
               </li>
               <li>
                  <label htmlFor="color">color : </label>
                  <input id="color" type="text" onChange={onChange} onFocus={onFocus} value={color} list="colorList" />
               </li>
               <li>
                  <label htmlFor="fontSize">fonstSize : </label>
                  <input id="fontSize" type="text" onChange={onChange} onFocus={onFocus} value={fontSize} list="fontSizeList" />
               </li>
               <li>
                  <label htmlFor="textDecoration">textDecoration : </label>
                  <input id="textDecoration" type="text" onChange={onChange} onFocus={onFocus} value={textDecoration} list="textDecorationList" />
               </li>
               <datalist id="widthList">
                  <option value="1920px"></option>
                  <option value="1600px"></option>
                  <option value="1400px"></option>
                  <option value="1280px"></option>
                  <option value="1024px"></option>
                  <option value="720px"></option>
               </datalist>
               <datalist id="colorList">
                  <option value="red"></option>
                  <option value="magenta"></option>
                  <option value="yellow"></option>
                  <option value="white"></option>
                  <option value="maroon"></option>
                  <option value="purple"></option>
                  <option value="olive"></option>
                  <option value="gray"></option>
                  <option value="silver"></option>
                  <option value="blue"></option>
                  <option value="lime"></option>
                  <option value="aqua"></option>
                  <option value="black"></option>
                  <option value="navy"></option>
                  <option value="green"></option>
                  <option value="teal"></option>
               </datalist>
               <datalist id="fontSizeList">
                  <option value="8px"></option>
                  <option value="12px"></option>
                  <option value="14px"></option>
                  <option value="20px"></option>
                  <option value="24px"></option>
                  <option value="32px"></option>
                  <option value="40px"></option>
                  <option value="64px"></option>
                  <option value="96px"></option>
                  <option value="120px"></option>
               </datalist>
               <datalist id="textDecorationList">
                  <option value="underline"></option>
                  <option value="inherit"></option>
                  <option value="initial"></option>
                  <option value="revert"></option>
                  <option value="unset"></option>
                  <option value="overline"></option>
                  <option value="none"></option>
               </datalist>
            </ul>
            <p
               style={{
                  width: width,
                  color: color,
                  fontSize: fontSize,
                  textDecoration: textDecoration,
               }}
            >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ratione fugiat et eius possimus minima quisquam eos quis? Velit, facere! Dolores doloribus sit earum adipisci obcaecati consequatur quae porro in!
            </p>
         </div>
      </>
   )
}

export default TextStyle
