import React, { useContext } from 'react'
import {myContext} from './context'


const Value = () => {
    const {count,setCount,text}=useContext(myContext)
  return (
    <div
      style={{
        border:'2px solid red', 
        height:'200px',
         width:'200px',
         }}>
          <p>{count}</p>
          <buton onClick={()=>setCount(count+1)}>increase</buton>
        <p>{text}</p>
        <p>Value.js</p>
       
    </div>
  )
}

export default Value
