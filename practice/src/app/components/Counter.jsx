import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
  return (
 <>
    <div>counter{count}</div>
   <div className="btn flex gap-2">
     <button onClick={()=>setCount(count+1)}>inc</button>
    <button onClick={()=>setCount(count-1)}>dec</button>
    <button onClick={()=>setCount(0)}>reset</button>
   </div>
 </>
   
  )
}

export default Counter