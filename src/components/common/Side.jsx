import React from 'react'

export const Side = ({side, value, setSide}) => {
  return (
    <div className="sideInput">
      <span>{side.toLowerCase()}:</span> 
      <button onClick={()=>{setSide(side,-10)}}>-10</button>
      <button onClick={()=>{setSide(side,-1)}}>-1</button>
      <input type="number" value={value} />
      <button onClick={()=>{setSide(side,1)}}>+1</button>
      <button onClick={()=>{setSide(side,10)}}>+10</button>

    </div>
  )
}
